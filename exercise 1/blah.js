

function coolFunction(arg) {
    if (typeof arg == 'string') return 'string';
    return 'not string';
}

const thisval = coolFunction('hi'); //string

function arrowFunction() {
    return 'hi';
}


const annoyingObject = {
    top: [
        {
            middle: {
                bottom: {
                    thing: 'frogs'
                }
            }
        }
    ]
}
annoyingObject.top[0].middle.bottom.thing
