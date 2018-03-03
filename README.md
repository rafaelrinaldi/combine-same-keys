[url]: https://rinaldi.io

# combine-same-keys
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
