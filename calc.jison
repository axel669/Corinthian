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
"PI"
    return 'PI'
"E"
    return 'E'
[a-z]\w*
    return 'FUNCTION'
','
    return ','
';'
    return ';'
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

%parse-param context

%% /* language grammar */

expressions
    : expressionGroup EOF
        {console.log(context); return $1;}
    ;

expressionGroup
    : e ';'
        {return $1;}
    ;
    /*: e ';'
        {$$ = [parseFloat($1.toFixed(14))];}
    | expressionGroup e ';'
        {$$ = $1.concat([parseFloat($2.toFixed(14))]);}
    ;*/

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
        {$$ = Math[$1].apply(null, $3);}
    ;

args
    : e
        {$$ = [$1];}
    | args ',' e
        {$$ = $1.concat([$3]);}
    ;
