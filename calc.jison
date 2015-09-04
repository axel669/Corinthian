/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+
    /* skip whitespace */
\d+("."\d+)?(e(\+|\-)\d+)?
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
"PI"
    return 'PI'
"E"
    return 'E'
[a-z]\w*
    return 'FUNCTION'
','
    return ','
<<EOF>>
    return 'EOF'
.
    return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {
            var info = $1.toExponential().match(/(\d\.)(.+)(e\+|\-)(\d+)/);
            var output;
            if (info[4] === '0') {
                output = info[1] + info[2].substr(0, 14);
            }
            return info[1];
        }
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    | FUNCTION '[' args ']'
        {$$ = Math[$1]($3);}
    ;

args
    : e
        {$$ = [$1];}
    | args ',' e
        {$$ = $1.concat([$3]);}
    ;
