from flask import flask
from operations import add, sub, mult, div

app = Flask(__name__)



@app.route('/add')
def ADD():
    '''adding parameters a and b'''
    a = int(request.args.get('a)'))
    b = int(request.args.get('b)'))
    result = add(a,b)

    return str(result)



@app.route('/sub')
def SUB():
    '''subtracting parameters a and b'''
    a = int(request.args.get('a)'))
    b = int(request.args.get('b)'))
    result = sub(a,b)

    return str(result)

@app.route('/mult')
def MULT():
    '''multiplying parameters a and b'''
    a = int(request.args.get('a)'))
    b = int(request.args.get('b)'))
    result = mult(a,b)

    return str(result)

@app.route('/div')
def DIV():
    '''dividing parameters a and b'''
    a = int(request.args.get('a)'))
    b = int(request.args.get('b)'))
    result = div(a,b)

    return str(result)



''' PART 2'''

operators = {
    'add': add,
    'sub': sub,
    'mult': mult,
    'div': div
}

@app.route('/Math/<oper>')
def operate(oper):
    '''Doing math on a and b '''
    a = int(request.args.get('a')
    b = int(request.args.get('b')
    result = operators[oper](a,b)

    return str(result)