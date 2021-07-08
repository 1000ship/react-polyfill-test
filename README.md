# Let's check how many features works in IE

- Only production mode supports IE browser

  ` "start:ie": "nodemon --watch 'src/**/*' -e ts,tsx,css --exec 'yarn build && serve -s build'"`

- Recognize IE browser

  ` export const isIE = /* @cc_on!@ */ false || !!(document as any).documentMode;`



## JS

- async-await / Promise (OK)
- useState (OK)
- useEffect (OK)
- useRef (OK)
- useCallback (OK)
- useContext (OK)
- fetch (OK)



## CSS

- flexbox (NO)

  ```css
  .like_flexbox {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  ```

  

- animation (NO)

- Unit 'vw', 'vh' (OK)

- cursor (OK)

- @media query (OK)



## Module

- styled-components (OK)



## Other

- import SVG file (OK)
- Typescript (OK)