/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+
    /* skip whitespace */
\d+("."\d+)?(e(\+|\-)?\d+)?"i"
    return 'COMPLEX'
"."\d+?(e(\+|\-)\d+)?"i"
    return 'COMPLEX'
\d+("."\d+)?(e(\+|\-)?\d+)?
    return 'NUMBER'
"."\d+?(e(\+|\-)\d+)?
    return 'NUMBER'
"*"
    return '*'
"/"
    return '/'
"-"
    return '-'
"+"
    return '+'
"%"
    return "%"
":="
    return ":="
"=>"
    return 'ARROW'
"^"
    return '^'
"("
    return '('
")"
    return ')'
'['
    return '['
']'
    return ']'
"|"
    return "|"
"\u2308"
    return 'OPEN_CEIL'
"\u2309"
    return 'CLOSE_CEIL'
"&"
    return 'AND'
"="
    return 'EQ'
"<"
    return 'LT'
">"
    return 'GT'
"\u2264"
    return 'LTE'
"\u2265"
    return 'GTE'
":"
    return ":"
"\u03c0"
    return 'PI'
'e'
    return 'E'
'i'
    return 'I'
[a-z]\w*
    return 'FUNCTION'
','
    return ','
"{"
    return "{"
"}"
    return "}"
<<EOF>>
    return 'EOF'
.
    return 'INVALID'

/lex

/* operator associations and precedence */

%left ":="
%left ARROW
%left LT LTE GT GTE
%left '+' '-'
%left '*' '/' "%"
%left '^'
%left UMINUS

%start expressions

%parse-param context

%% /* language grammar */

expressions
    : e EOF
        {return $1;}
    | simpleComp EOF
        {return $1;}
    ;

e
    : e '+' e
        {$$ = {op: $2, left: $1, right: $3};}
    | e '-' e
        {$$ = {op: $2, left: $1, right: $3};}
    | e '*' e
        {$$ = {op: $2, left: $1, right: $3};}
    | e e
        {$$ = {op: "*", left: $1, right: $3};}
    | e '/' e
        {$$ = {op: $2, left: $1, right: $3};}
    | e '%' e
        {$$ = {op: $2, left: $1, right: $3};}
    | e '^' e
        {$$ = {op: $2, left: $1, right: $3};}
    | '-' e %prec UMINUS
        {$$ = {op: $1, left: null, right: $2};}
    | '(' e ')'
        {$$ = $2;}
    | "|" e "|"
        {$$ = {call: 'abs', args: [$2]};}
    | OPEN_CEIL e CLOSE_CEIL
        {$$ = {call: 'ceil', args: [$2]};}
    | NUMBER
        {$$ = complex(parseFloat(yytext));}
    | COMPLEX
        {$$ = complex(0, parseFloat(yytext.slice(0, -1)));}
    | E
        {$$ = complex(Math.E);}
    | PI
        {$$ = complex(Math.PI);}
    | I
        {$$ = complex(0, 1);}
    | FUNCTION '[' args ']'
        {$$ = {call: $1, args: $3};}
    | '[' functionArgs ']' ARROW e
        {$$ = {op: "function", argsList: $2, expr: $5};}
    | FUNCTION
        {$$ = {variable: $1};}
    | FUNCTION ":=" e
        {$$ = {op: $2, left: $1, right: $3};}
    | '[' functionArgs ']' ARROW "{" piecestmnts "}"
        {$$ = {op: "piece", argsList: $2, values: $6};}
    ;

simpleComp
    : e ltcomp e
        {$$ = {op: $2, left: $1, right: $3};}
    | e gtcomp e
        {$$ = {op: $2, left: $1, right: $3};}
    | e gtcomp e gtcomp e
        {$$ = {op: "range", min: $5, max: $1, expr: $3};}
    | e ltcomp e ltcomp e
        {$$ = {op: "range", min: $1, max: $5, expr: $3};}
    | simpleComp AND simpleComp
        {$$ = {op: "and", left: $1, right: $3};}
    ;

args
    : e
        {$$ = [$1];}
    | args ',' e
        {$$ = $1.concat([$3]);}
    ;

functionArgs
    : FUNCTION
        {$$ = [$1];}
    | functionArgs ',' FUNCTION
        {$$ = $1.concat([$3]);}
    ;

ltcomp
    : LT
        {$$ = $1;}
    | LTE
        {$$ = $1;}
    ;
gtcomp
    : GT
        {$$ = $1;}
    | GTE
        {$$ = $1;}
    ;
comp
    : ltcomp
        {$$ = $1}
    | gtcomp
        {$$ = $1}
    ;
comparison
    : e gtcomp FUNCTION gtcomp e
        {$$ = {op: "range", min: $5, max: $1, variable: $3};}
    | e ltcomp FUNCTION ltcomp e
        {$$ = {op: "range", min: $1, max: $5, variable: $3};}
    | FUNCTION comp e
        {$$ = {op: $2, left: $1, right: $3};}
    | comparison AND comparison
        {$$ = {op: $2, left: $1, right: $3};}
    ;

piecestmnt
    : comparison ":" e
        {$$ = {condition: $1, value: $3};}
    ;

piecestmnts
    : piecestmnt
        {$$ = [$1];}
    | piecestmnts piecestmnt
        {$$ = $1.concat([$2]);}
    ;
