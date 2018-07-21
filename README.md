[url]: https://rinaldi.io

# combine-same-keys [![Build Status](https://semaphoreci.com/api/v1/rafaelrinaldi/combine-same-keys/branches/master/badge.svg)](https://semaphoreci.com/rafaelrinaldi/combine-same-keys)
> Combine all properties sharing the same key into a single object

## Install

    npm i combine-same-keys

## Usage

```js
import combineSameKeys from 'combine-same-keys'

combineSameKeys(
  {
    foo: { color: 'red' },
    bar: { fontSize: 16 }
  },

  {
    foo: {
      backgroundColor: 'gold',
      lineHeight: 0
    }
  },

  { baz: { opacity: 1 } }
)

/*
{ foo: { color: 'red', backgroundColor: 'gold', lineHeight: 0 },
      bar: { fontSize: 16 },
      baz: { opacity: 1 } }
*/
```

## API

### `combineSameKeys(...args)`

#### `args`

Type: rest parameter with `Object` entries

## License

MIT © [Rafael Rinaldi][url]

---

<p align="center">
  <a href="https://buymeacoff.ee/rinaldi" title="Buy me a coffee">Buy me a ☕</a>
</p>
