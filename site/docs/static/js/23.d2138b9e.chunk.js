webpackJsonp([23],{52:function(n,t){n.exports="## Slot \n\nHere we take the button in omiu as an example to illustrate the slot.\n\n```html\n<o-button>I'm button text</o-button>\n```\n\nLook at the source code:\n\n```jsx {19-19}\n@tag('o-button')\nexport default class Button extends WeElement {\n  ...\n  ...\n  ...\n  \n  render(props) {\n\n    return <button disabled={props.disabled} {...extractClass(props, 'o-button', {\n      ['o-button-' + props.type]: props.type,\n      ['o-button-' + props.size]: props.size,\n      'is-plain': props.plain,\n      'is-round': props.round,\n      'is-circle': props.circle,\n      'is-disabled': props.disabled,\n      'is-block': props.block\n    })}>\n      {props.text}\n      <slot></slot>\n    </button>\n  }\n}\n```\n\nThen why support `props.text`? This is because if you import the relevant JS after using the custom tag, the content in the slot will be directly displayed in the page, bringing bad user experience. Therefore, if you cannot import the JS of the custom component in advance, you can use the following methods to achieve the same effect and avoid the above problems:\n\n\n```html\n<o-button text=\"I'm button text\"></o-button>\n```\n\n### Named Slot\n\nA named slot can specify where to insert.\n\n```html\n<o-el>\n  <span slot=\"abc\"></span>\n  <span slot=\"def\"></span>\n</o-el>\n```\n\nComponent definition:\n\n\n```jsx {6-6,8-8}\n@tag('o-el')\nexport default class Button extends WeElement {\n  \n  render(props) {\n    return <div>\n      <slot name=\"abc\"></slot>\n      <div>Some Info</div>\n      <slot name=\"def\"></slot>\n    </div>\n  }\n}\n```\n"}});
//# sourceMappingURL=23.d2138b9e.chunk.js.map