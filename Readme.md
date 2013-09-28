
# eql

  shallow eql utility.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/eql

## Examples

```js

// => true
assert(true == eql(new Date(2013, 0, 0), new Date(2013, 0, 0)));
assert(true == eql({ a: eql }, { a: eql }));
assert(true == eql(undefined, undefined));
assert(true == eql(true, true));
assert(true == eql(null, null));
assert(true == eql(/i/ig, /i/ig));
assert(true == eql([eql], [eql]));
assert(true == eql('', ''));
assert(true == eql(0, 0));

// => false
assert(false == eql(new Date(2013, 1, 0), new Date(2013, 0, 0)));
assert(false == eql({ a: eql }, { a: eql.object }));
assert(false == eql([eql.array], [eql.object]));
assert(false == eql(null, undefined));
assert(false == eql(false, true));
assert(false == eql(/g/i, /a/gi));
assert(false == eql(null, 0));
assert(false == eql('', ' '));
assert(false == eql(0, 1));
```

## API

### eql(a, b)

  Compare `a` to `b`.

#### .regexp(a, b)

  Compare regexps `a`, `b`.

#### .object(a, b)

  Compare objects `a`, `b`.

#### .array(a, b)

  Compare arrays `a`, `b`.

#### .date(a, b)

  Compare dates `a`, `b`.

## Tests

```bash
  λ eql ・ make test
```

## License

  MIT
