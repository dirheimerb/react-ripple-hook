**react-ripple-hook** • [Readme](../../README.md) \| [API](../../globals.md)

---

[react-ripple-hook](../../README.md) / [\<internal\>](../README.md) / VendorProperties

# Interface: VendorProperties\<TLength, TTime\>

## Extends

-   [`VendorLonghandProperties`](VendorLonghandProperties.md)\<`TLength`, `TTime`\>.[`VendorShorthandProperties`](VendorShorthandProperties.md)\<`TLength`, `TTime`\>

## Type parameters

• **TLength** = `string` & `Object` \| `0`

• **TTime** = `string` & `Object`

## Properties

### MozAnimation?

> **`optional`** **MozAnimation**: [`Animation`](../type-aliases/Animation.md)\<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`MozAnimation`](VendorShorthandProperties.md#mozanimation)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7876

---

### MozAnimationDelay?

> **`optional`** **MozAnimationDelay**: [`AnimationDelay`](../type-aliases/AnimationDelay.md)\<`TTime`\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationDelay`](VendorLonghandProperties.md#mozanimationdelay)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6123

---

### MozAnimationDirection?

> **`optional`** **MozAnimationDirection**: [`AnimationDirection`](../type-aliases/AnimationDirection.md)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationDirection`](VendorLonghandProperties.md#mozanimationdirection)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6131

---

### MozAnimationDuration?

> **`optional`** **MozAnimationDuration**: [`AnimationDuration`](../type-aliases/AnimationDuration.md)\<`TTime`\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationDuration`](VendorLonghandProperties.md#mozanimationduration)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6139

---

### MozAnimationFillMode?

> **`optional`** **MozAnimationFillMode**: [`AnimationFillMode`](../type-aliases/AnimationFillMode.md)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationFillMode`](VendorLonghandProperties.md#mozanimationfillmode)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6147

---

### MozAnimationIterationCount?

> **`optional`** **MozAnimationIterationCount**: [`AnimationIterationCount`](../type-aliases/AnimationIterationCount.md)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationIterationCount`](VendorLonghandProperties.md#mozanimationiterationcount)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6155

---

### MozAnimationName?

> **`optional`** **MozAnimationName**: [`AnimationName`](../type-aliases/AnimationName.md)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationName`](VendorLonghandProperties.md#mozanimationname)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6163

---

### MozAnimationPlayState?

> **`optional`** **MozAnimationPlayState**: [`AnimationPlayState`](../type-aliases/AnimationPlayState.md)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationPlayState`](VendorLonghandProperties.md#mozanimationplaystate)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6171

---

### MozAnimationTimingFunction?

> **`optional`** **MozAnimationTimingFunction**: [`AnimationTimingFunction`](../type-aliases/AnimationTimingFunction.md)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAnimationTimingFunction`](VendorLonghandProperties.md#mozanimationtimingfunction)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6179

---

### MozAppearance?

> **`optional`** **MozAppearance**: [`MozAppearance`](../type-aliases/MozAppearance.md)

The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.

**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozAppearance`](VendorLonghandProperties.md#mozappearance)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6187

---

### MozBinding?

> **`optional`** **MozBinding**: [`MozBinding`](../type-aliases/MozBinding.md)

The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.

**Syntax**: `<url> | none`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBinding`](VendorLonghandProperties.md#mozbinding)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6195

---

### MozBorderBottomColors?

> **`optional`** **MozBorderBottomColors**: [`MozBorderBottomColors`](../type-aliases/MozBorderBottomColors.md)

In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderBottomColors`](VendorLonghandProperties.md#mozborderbottomcolors)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6203

---

### MozBorderEndColor?

> **`optional`** **MozBorderEndColor**: [`BorderInlineEndColor`](../type-aliases/BorderInlineEndColor.md)

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderEndColor`](VendorLonghandProperties.md#mozborderendcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6211

---

### MozBorderEndStyle?

> **`optional`** **MozBorderEndStyle**: [`BorderInlineEndStyle`](../type-aliases/BorderInlineEndStyle.md)

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderEndStyle`](VendorLonghandProperties.md#mozborderendstyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6219

---

### MozBorderEndWidth?

> **`optional`** **MozBorderEndWidth**: [`BorderInlineEndWidth`](../type-aliases/BorderInlineEndWidth.md)\<`TLength`\>

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderEndWidth`](VendorLonghandProperties.md#mozborderendwidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6227

---

### MozBorderImage?

> **`optional`** **MozBorderImage**: [`BorderImage`](../type-aliases/BorderImage.md)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`MozBorderImage`](VendorShorthandProperties.md#mozborderimage)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7882

---

### MozBorderLeftColors?

> **`optional`** **MozBorderLeftColors**: [`MozBorderLeftColors`](../type-aliases/MozBorderLeftColors.md)

In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderLeftColors`](VendorLonghandProperties.md#mozborderleftcolors)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6235

---

### MozBorderRightColors?

> **`optional`** **MozBorderRightColors**: [`MozBorderRightColors`](../type-aliases/MozBorderRightColors.md)

In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderRightColors`](VendorLonghandProperties.md#mozborderrightcolors)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6243

---

### MozBorderStartColor?

> **`optional`** **MozBorderStartColor**: [`BorderInlineStartColor`](../type-aliases/BorderInlineStartColor.md)

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderStartColor`](VendorLonghandProperties.md#mozborderstartcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6251

---

### MozBorderStartStyle?

> **`optional`** **MozBorderStartStyle**: [`BorderInlineStartStyle`](../type-aliases/BorderInlineStartStyle.md)

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderStartStyle`](VendorLonghandProperties.md#mozborderstartstyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6259

---

### MozBorderTopColors?

> **`optional`** **MozBorderTopColors**: [`MozBorderTopColors`](../type-aliases/MozBorderTopColors.md)

In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBorderTopColors`](VendorLonghandProperties.md#mozbordertopcolors)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6267

---

### MozBoxSizing?

> **`optional`** **MozBoxSizing**: [`BoxSizing`](../type-aliases/BoxSizing.md)

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozBoxSizing`](VendorLonghandProperties.md#mozboxsizing)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6275

---

### MozColumnCount?

> **`optional`** **MozColumnCount**: [`ColumnCount`](../type-aliases/ColumnCount.md)

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozColumnCount`](VendorLonghandProperties.md#mozcolumncount)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6283

---

### MozColumnFill?

> **`optional`** **MozColumnFill**: [`ColumnFill`](../type-aliases/ColumnFill.md)

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozColumnFill`](VendorLonghandProperties.md#mozcolumnfill)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6291

---

### MozColumnRule?

> **`optional`** **MozColumnRule**: [`ColumnRule`](../type-aliases/ColumnRule.md)\<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`MozColumnRule`](VendorShorthandProperties.md#mozcolumnrule)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7888

---

### MozColumnRuleColor?

> **`optional`** **MozColumnRuleColor**: [`ColumnRuleColor`](../type-aliases/ColumnRuleColor.md)

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozColumnRuleColor`](VendorLonghandProperties.md#mozcolumnrulecolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6299

---

### MozColumnRuleStyle?

> **`optional`** **MozColumnRuleStyle**: [`ColumnRuleStyle`](../type-aliases/ColumnRuleStyle.md)

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozColumnRuleStyle`](VendorLonghandProperties.md#mozcolumnrulestyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6307

---

### MozColumnRuleWidth?

> **`optional`** **MozColumnRuleWidth**: [`ColumnRuleWidth`](../type-aliases/ColumnRuleWidth.md)\<`TLength`\>

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozColumnRuleWidth`](VendorLonghandProperties.md#mozcolumnrulewidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6315

---

### MozColumnWidth?

> **`optional`** **MozColumnWidth**: [`ColumnWidth`](../type-aliases/ColumnWidth.md)\<`TLength`\>

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozColumnWidth`](VendorLonghandProperties.md#mozcolumnwidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6323

---

### MozColumns?

> **`optional`** **MozColumns**: [`Columns`](../type-aliases/Columns.md)\<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`MozColumns`](VendorShorthandProperties.md#mozcolumns)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7894

---

### MozContextProperties?

> **`optional`** **MozContextProperties**: [`MozContextProperties`](../type-aliases/MozContextProperties.md)

The **`-moz-context-properties`** property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.

**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozContextProperties`](VendorLonghandProperties.md#mozcontextproperties)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6331

---

### MozFontFeatureSettings?

> **`optional`** **MozFontFeatureSettings**: [`FontFeatureSettings`](../type-aliases/FontFeatureSettings.md)

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozFontFeatureSettings`](VendorLonghandProperties.md#mozfontfeaturesettings)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6339

---

### MozFontLanguageOverride?

> **`optional`** **MozFontLanguageOverride**: [`FontLanguageOverride`](../type-aliases/FontLanguageOverride.md)

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozFontLanguageOverride`](VendorLonghandProperties.md#mozfontlanguageoverride)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6347

---

### MozHyphens?

> **`optional`** **MozHyphens**: [`Hyphens`](../type-aliases/Hyphens.md)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozHyphens`](VendorLonghandProperties.md#mozhyphens)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6355

---

### MozImageRegion?

> **`optional`** **MozImageRegion**: [`MozImageRegion`](../type-aliases/MozImageRegion.md)

For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozImageRegion`](VendorLonghandProperties.md#mozimageregion)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6363

---

### MozMarginEnd?

> **`optional`** **MozMarginEnd**: [`MarginInlineEnd`](../type-aliases/MarginInlineEnd.md)\<`TLength`\>

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozMarginEnd`](VendorLonghandProperties.md#mozmarginend)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6371

---

### MozMarginStart?

> **`optional`** **MozMarginStart**: [`MarginInlineStart`](../type-aliases/MarginInlineStart.md)\<`TLength`\>

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozMarginStart`](VendorLonghandProperties.md#mozmarginstart)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6379

---

### MozOrient?

> **`optional`** **MozOrient**: [`MozOrient`](../type-aliases/MozOrient.md)

The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.

**Syntax**: `inline | block | horizontal | vertical`

**Initial value**: `inline`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozOrient`](VendorLonghandProperties.md#mozorient)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6387

---

### MozOsxFontSmoothing?

> **`optional`** **MozOsxFontSmoothing**: [`FontSmooth`](../type-aliases/FontSmooth.md)\<`TLength`\>

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozOsxFontSmoothing`](VendorLonghandProperties.md#mozosxfontsmoothing)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6395

---

### MozOutlineRadius?

> **`optional`** **MozOutlineRadius**: [`MozOutlineRadius`](../type-aliases/MozOutlineRadius.md)\<`TLength`\>

In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.

**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`MozOutlineRadius`](VendorShorthandProperties.md#mozoutlineradius)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7900

---

### MozOutlineRadiusBottomleft?

> **`optional`** **MozOutlineRadiusBottomleft**: [`MozOutlineRadiusBottomleft`](../type-aliases/MozOutlineRadiusBottomleft.md)\<`TLength`\>

In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozOutlineRadiusBottomleft`](VendorLonghandProperties.md#mozoutlineradiusbottomleft)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6403

---

### MozOutlineRadiusBottomright?

> **`optional`** **MozOutlineRadiusBottomright**: [`MozOutlineRadiusBottomright`](../type-aliases/MozOutlineRadiusBottomright.md)\<`TLength`\>

In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozOutlineRadiusBottomright`](VendorLonghandProperties.md#mozoutlineradiusbottomright)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6411

---

### MozOutlineRadiusTopleft?

> **`optional`** **MozOutlineRadiusTopleft**: [`MozOutlineRadiusTopleft`](../type-aliases/MozOutlineRadiusTopleft.md)\<`TLength`\>

In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozOutlineRadiusTopleft`](VendorLonghandProperties.md#mozoutlineradiustopleft)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6419

---

### MozOutlineRadiusTopright?

> **`optional`** **MozOutlineRadiusTopright**: [`MozOutlineRadiusTopright`](../type-aliases/MozOutlineRadiusTopright.md)\<`TLength`\>

In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozOutlineRadiusTopright`](VendorLonghandProperties.md#mozoutlineradiustopright)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6427

---

### MozPaddingEnd?

> **`optional`** **MozPaddingEnd**: [`PaddingInlineEnd`](../type-aliases/PaddingInlineEnd.md)\<`TLength`\>

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozPaddingEnd`](VendorLonghandProperties.md#mozpaddingend)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6435

---

### MozPaddingStart?

> **`optional`** **MozPaddingStart**: [`PaddingInlineStart`](../type-aliases/PaddingInlineStart.md)\<`TLength`\>

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozPaddingStart`](VendorLonghandProperties.md#mozpaddingstart)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6443

---

### MozStackSizing?

> **`optional`** **MozStackSizing**: [`MozStackSizing`](../type-aliases/MozStackSizing.md)

**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.

**Syntax**: `ignore | stretch-to-fit`

**Initial value**: `stretch-to-fit`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozStackSizing`](VendorLonghandProperties.md#mozstacksizing)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6451

---

### MozTabSize?

> **`optional`** **MozTabSize**: [`TabSize`](../type-aliases/TabSize.md)\<`TLength`\>

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozTabSize`](VendorLonghandProperties.md#moztabsize)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6459

---

### MozTextBlink?

> **`optional`** **MozTextBlink**: [`MozTextBlink`](../type-aliases/MozTextBlink.md)

The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.

**Syntax**: `none | blink`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozTextBlink`](VendorLonghandProperties.md#moztextblink)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6467

---

### MozTextSizeAdjust?

> **`optional`** **MozTextSizeAdjust**: [`TextSizeAdjust`](../type-aliases/TextSizeAdjust.md)

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozTextSizeAdjust`](VendorLonghandProperties.md#moztextsizeadjust)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6475

---

### MozUserFocus?

> **`optional`** **MozUserFocus**: [`MozUserFocus`](../type-aliases/MozUserFocus.md)

The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.

**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozUserFocus`](VendorLonghandProperties.md#mozuserfocus)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6483

---

### MozUserModify?

> **`optional`** **MozUserModify**: [`MozUserModify`](../type-aliases/MozUserModify.md)

The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.

**Syntax**: `read-only | read-write | write-only`

**Initial value**: `read-only`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozUserModify`](VendorLonghandProperties.md#mozusermodify)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6491

---

### MozUserSelect?

> **`optional`** **MozUserSelect**: [`UserSelect`](../type-aliases/UserSelect.md)

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozUserSelect`](VendorLonghandProperties.md#mozuserselect)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6499

---

### MozWindowDragging?

> **`optional`** **MozWindowDragging**: [`MozWindowDragging`](../type-aliases/MozWindowDragging.md)

The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.

**Syntax**: `drag | no-drag`

**Initial value**: `drag`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozWindowDragging`](VendorLonghandProperties.md#mozwindowdragging)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6507

---

### MozWindowShadow?

> **`optional`** **MozWindowShadow**: [`MozWindowShadow`](../type-aliases/MozWindowShadow.md)

The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.

**Syntax**: `default | menu | tooltip | sheet | none`

**Initial value**: `default`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`MozWindowShadow`](VendorLonghandProperties.md#mozwindowshadow)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6515

---

### WebkitAlignContent?

> **`optional`** **WebkitAlignContent**: [`AlignContent`](../type-aliases/AlignContent.md)

The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAlignContent`](VendorLonghandProperties.md#webkitaligncontent)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7011

---

### WebkitAlignItems?

> **`optional`** **WebkitAlignItems**: [`AlignItems`](../type-aliases/AlignItems.md)

The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAlignItems`](VendorLonghandProperties.md#webkitalignitems)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7019

---

### WebkitAlignSelf?

> **`optional`** **WebkitAlignSelf**: [`AlignSelf`](../type-aliases/AlignSelf.md)

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAlignSelf`](VendorLonghandProperties.md#webkitalignself)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7027

---

### WebkitAnimation?

> **`optional`** **WebkitAnimation**: [`Animation`](../type-aliases/Animation.md)\<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitAnimation`](VendorShorthandProperties.md#webkitanimation)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7948

---

### WebkitAnimationDelay?

> **`optional`** **WebkitAnimationDelay**: [`AnimationDelay`](../type-aliases/AnimationDelay.md)\<`TTime`\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationDelay`](VendorLonghandProperties.md#webkitanimationdelay)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7035

---

### WebkitAnimationDirection?

> **`optional`** **WebkitAnimationDirection**: [`AnimationDirection`](../type-aliases/AnimationDirection.md)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationDirection`](VendorLonghandProperties.md#webkitanimationdirection)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7043

---

### WebkitAnimationDuration?

> **`optional`** **WebkitAnimationDuration**: [`AnimationDuration`](../type-aliases/AnimationDuration.md)\<`TTime`\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationDuration`](VendorLonghandProperties.md#webkitanimationduration)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7051

---

### WebkitAnimationFillMode?

> **`optional`** **WebkitAnimationFillMode**: [`AnimationFillMode`](../type-aliases/AnimationFillMode.md)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationFillMode`](VendorLonghandProperties.md#webkitanimationfillmode)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7059

---

### WebkitAnimationIterationCount?

> **`optional`** **WebkitAnimationIterationCount**: [`AnimationIterationCount`](../type-aliases/AnimationIterationCount.md)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationIterationCount`](VendorLonghandProperties.md#webkitanimationiterationcount)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7067

---

### WebkitAnimationName?

> **`optional`** **WebkitAnimationName**: [`AnimationName`](../type-aliases/AnimationName.md)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationName`](VendorLonghandProperties.md#webkitanimationname)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7075

---

### WebkitAnimationPlayState?

> **`optional`** **WebkitAnimationPlayState**: [`AnimationPlayState`](../type-aliases/AnimationPlayState.md)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationPlayState`](VendorLonghandProperties.md#webkitanimationplaystate)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7083

---

### WebkitAnimationTimingFunction?

> **`optional`** **WebkitAnimationTimingFunction**: [`AnimationTimingFunction`](../type-aliases/AnimationTimingFunction.md)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAnimationTimingFunction`](VendorLonghandProperties.md#webkitanimationtimingfunction)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7091

---

### WebkitAppearance?

> **`optional`** **WebkitAppearance**: [`WebkitAppearance`](../type-aliases/WebkitAppearance.md)

The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.

**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitAppearance`](VendorLonghandProperties.md#webkitappearance)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7099

---

### WebkitBackdropFilter?

> **`optional`** **WebkitBackdropFilter**: [`BackdropFilter`](../type-aliases/BackdropFilter.md)

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBackdropFilter`](VendorLonghandProperties.md#webkitbackdropfilter)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7107

---

### WebkitBackfaceVisibility?

> **`optional`** **WebkitBackfaceVisibility**: [`BackfaceVisibility`](../type-aliases/BackfaceVisibility.md)

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBackfaceVisibility`](VendorLonghandProperties.md#webkitbackfacevisibility)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7115

---

### WebkitBackgroundClip?

> **`optional`** **WebkitBackgroundClip**: [`BackgroundClip`](../type-aliases/BackgroundClip.md)

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBackgroundClip`](VendorLonghandProperties.md#webkitbackgroundclip)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7123

---

### WebkitBackgroundOrigin?

> **`optional`** **WebkitBackgroundOrigin**: [`BackgroundOrigin`](../type-aliases/BackgroundOrigin.md)

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBackgroundOrigin`](VendorLonghandProperties.md#webkitbackgroundorigin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7131

---

### WebkitBackgroundSize?

> **`optional`** **WebkitBackgroundSize**: [`BackgroundSize`](../type-aliases/BackgroundSize.md)\<`TLength`\>

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBackgroundSize`](VendorLonghandProperties.md#webkitbackgroundsize)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7139

---

### WebkitBorderBefore?

> **`optional`** **WebkitBorderBefore**: [`WebkitBorderBefore`](../type-aliases/WebkitBorderBefore.md)\<`TLength`\>

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitBorderBefore`](VendorShorthandProperties.md#webkitborderbefore)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7954

---

### WebkitBorderBeforeColor?

> **`optional`** **WebkitBorderBeforeColor**: [`WebkitBorderBeforeColor`](../type-aliases/WebkitBorderBeforeColor.md)

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderBeforeColor`](VendorLonghandProperties.md#webkitborderbeforecolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7145

---

### WebkitBorderBeforeStyle?

> **`optional`** **WebkitBorderBeforeStyle**: [`WebkitBorderBeforeStyle`](../type-aliases/WebkitBorderBeforeStyle.md)

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderBeforeStyle`](VendorLonghandProperties.md#webkitborderbeforestyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7151

---

### WebkitBorderBeforeWidth?

> **`optional`** **WebkitBorderBeforeWidth**: [`WebkitBorderBeforeWidth`](../type-aliases/WebkitBorderBeforeWidth.md)\<`TLength`\>

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderBeforeWidth`](VendorLonghandProperties.md#webkitborderbeforewidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7157

---

### WebkitBorderBottomLeftRadius?

> **`optional`** **WebkitBorderBottomLeftRadius**: [`BorderBottomLeftRadius`](../type-aliases/BorderBottomLeftRadius.md)\<`TLength`\>

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderBottomLeftRadius`](VendorLonghandProperties.md#webkitborderbottomleftradius)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7165

---

### WebkitBorderBottomRightRadius?

> **`optional`** **WebkitBorderBottomRightRadius**: [`BorderBottomRightRadius`](../type-aliases/BorderBottomRightRadius.md)\<`TLength`\>

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderBottomRightRadius`](VendorLonghandProperties.md#webkitborderbottomrightradius)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7173

---

### WebkitBorderImage?

> **`optional`** **WebkitBorderImage**: [`BorderImage`](../type-aliases/BorderImage.md)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitBorderImage`](VendorShorthandProperties.md#webkitborderimage)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7960

---

### WebkitBorderImageSlice?

> **`optional`** **WebkitBorderImageSlice**: [`BorderImageSlice`](../type-aliases/BorderImageSlice.md)

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderImageSlice`](VendorLonghandProperties.md#webkitborderimageslice)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7181

---

### WebkitBorderRadius?

> **`optional`** **WebkitBorderRadius**: [`BorderRadius`](../type-aliases/BorderRadius.md)\<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitBorderRadius`](VendorShorthandProperties.md#webkitborderradius)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7966

---

### WebkitBorderTopLeftRadius?

> **`optional`** **WebkitBorderTopLeftRadius**: [`BorderTopLeftRadius`](../type-aliases/BorderTopLeftRadius.md)\<`TLength`\>

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderTopLeftRadius`](VendorLonghandProperties.md#webkitbordertopleftradius)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7189

---

### WebkitBorderTopRightRadius?

> **`optional`** **WebkitBorderTopRightRadius**: [`BorderTopRightRadius`](../type-aliases/BorderTopRightRadius.md)\<`TLength`\>

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBorderTopRightRadius`](VendorLonghandProperties.md#webkitbordertoprightradius)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7197

---

### WebkitBoxDecorationBreak?

> **`optional`** **WebkitBoxDecorationBreak**: [`BoxDecorationBreak`](../type-aliases/BoxDecorationBreak.md)

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBoxDecorationBreak`](VendorLonghandProperties.md#webkitboxdecorationbreak)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7205

---

### WebkitBoxReflect?

> **`optional`** **WebkitBoxReflect**: [`WebkitBoxReflect`](../type-aliases/WebkitBoxReflect.md)\<`TLength`\>

The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.

**Syntax**: `[ above | below | right | left ]? <length>? <image>?`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBoxReflect`](VendorLonghandProperties.md#webkitboxreflect)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7213

---

### WebkitBoxShadow?

> **`optional`** **WebkitBoxShadow**: [`BoxShadow`](../type-aliases/BoxShadow.md)

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBoxShadow`](VendorLonghandProperties.md#webkitboxshadow)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7221

---

### WebkitBoxSizing?

> **`optional`** **WebkitBoxSizing**: [`BoxSizing`](../type-aliases/BoxSizing.md)

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitBoxSizing`](VendorLonghandProperties.md#webkitboxsizing)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7229

---

### WebkitClipPath?

> **`optional`** **WebkitClipPath**: [`ClipPath`](../type-aliases/ClipPath.md)

The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitClipPath`](VendorLonghandProperties.md#webkitclippath)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7237

---

### WebkitColumnCount?

> **`optional`** **WebkitColumnCount**: [`ColumnCount`](../type-aliases/ColumnCount.md)

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitColumnCount`](VendorLonghandProperties.md#webkitcolumncount)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7245

---

### WebkitColumnFill?

> **`optional`** **WebkitColumnFill**: [`ColumnFill`](../type-aliases/ColumnFill.md)

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitColumnFill`](VendorLonghandProperties.md#webkitcolumnfill)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7253

---

### WebkitColumnRule?

> **`optional`** **WebkitColumnRule**: [`ColumnRule`](../type-aliases/ColumnRule.md)\<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitColumnRule`](VendorShorthandProperties.md#webkitcolumnrule)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7972

---

### WebkitColumnRuleColor?

> **`optional`** **WebkitColumnRuleColor**: [`ColumnRuleColor`](../type-aliases/ColumnRuleColor.md)

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitColumnRuleColor`](VendorLonghandProperties.md#webkitcolumnrulecolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7261

---

### WebkitColumnRuleStyle?

> **`optional`** **WebkitColumnRuleStyle**: [`ColumnRuleStyle`](../type-aliases/ColumnRuleStyle.md)

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitColumnRuleStyle`](VendorLonghandProperties.md#webkitcolumnrulestyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7269

---

### WebkitColumnRuleWidth?

> **`optional`** **WebkitColumnRuleWidth**: [`ColumnRuleWidth`](../type-aliases/ColumnRuleWidth.md)\<`TLength`\>

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitColumnRuleWidth`](VendorLonghandProperties.md#webkitcolumnrulewidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7277

---

### WebkitColumnSpan?

> **`optional`** **WebkitColumnSpan**: [`ColumnSpan`](../type-aliases/ColumnSpan.md)

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitColumnSpan`](VendorLonghandProperties.md#webkitcolumnspan)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7285

---

### WebkitColumnWidth?

> **`optional`** **WebkitColumnWidth**: [`ColumnWidth`](../type-aliases/ColumnWidth.md)\<`TLength`\>

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitColumnWidth`](VendorLonghandProperties.md#webkitcolumnwidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7293

---

### WebkitColumns?

> **`optional`** **WebkitColumns**: [`Columns`](../type-aliases/Columns.md)\<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitColumns`](VendorShorthandProperties.md#webkitcolumns)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7978

---

### WebkitFilter?

> **`optional`** **WebkitFilter**: [`Filter`](../type-aliases/Filter.md)

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFilter`](VendorLonghandProperties.md#webkitfilter)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7301

---

### WebkitFlex?

> **`optional`** **WebkitFlex**: [`Flex`](../type-aliases/Flex.md)\<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitFlex`](VendorShorthandProperties.md#webkitflex)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7984

---

### WebkitFlexBasis?

> **`optional`** **WebkitFlexBasis**: [`FlexBasis`](../type-aliases/FlexBasis.md)\<`TLength`\>

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFlexBasis`](VendorLonghandProperties.md#webkitflexbasis)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7309

---

### WebkitFlexDirection?

> **`optional`** **WebkitFlexDirection**: [`FlexDirection`](../type-aliases/FlexDirection.md)

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFlexDirection`](VendorLonghandProperties.md#webkitflexdirection)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7317

---

### WebkitFlexFlow?

> **`optional`** **WebkitFlexFlow**: [`FlexFlow`](../type-aliases/FlexFlow.md)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitFlexFlow`](VendorShorthandProperties.md#webkitflexflow)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7990

---

### WebkitFlexGrow?

> **`optional`** **WebkitFlexGrow**: [`FlexGrow`](../type-aliases/FlexGrow.md)

The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFlexGrow`](VendorLonghandProperties.md#webkitflexgrow)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7325

---

### WebkitFlexShrink?

> **`optional`** **WebkitFlexShrink**: [`FlexShrink`](../type-aliases/FlexShrink.md)

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFlexShrink`](VendorLonghandProperties.md#webkitflexshrink)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7333

---

### WebkitFlexWrap?

> **`optional`** **WebkitFlexWrap**: [`FlexWrap`](../type-aliases/FlexWrap.md)

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFlexWrap`](VendorLonghandProperties.md#webkitflexwrap)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7341

---

### WebkitFontFeatureSettings?

> **`optional`** **WebkitFontFeatureSettings**: [`FontFeatureSettings`](../type-aliases/FontFeatureSettings.md)

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFontFeatureSettings`](VendorLonghandProperties.md#webkitfontfeaturesettings)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7349

---

### WebkitFontKerning?

> **`optional`** **WebkitFontKerning**: [`FontKerning`](../type-aliases/FontKerning.md)

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFontKerning`](VendorLonghandProperties.md#webkitfontkerning)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7357

---

### WebkitFontSmoothing?

> **`optional`** **WebkitFontSmoothing**: [`FontSmooth`](../type-aliases/FontSmooth.md)\<`TLength`\>

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFontSmoothing`](VendorLonghandProperties.md#webkitfontsmoothing)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7365

---

### WebkitFontVariantLigatures?

> **`optional`** **WebkitFontVariantLigatures**: [`FontVariantLigatures`](../type-aliases/FontVariantLigatures.md)

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitFontVariantLigatures`](VendorLonghandProperties.md#webkitfontvariantligatures)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7373

---

### WebkitHyphenateCharacter?

> **`optional`** **WebkitHyphenateCharacter**: [`HyphenateCharacter`](../type-aliases/HyphenateCharacter.md)

The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.

**Syntax**: `auto | <string>`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitHyphenateCharacter`](VendorLonghandProperties.md#webkithyphenatecharacter)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7381

---

### WebkitHyphens?

> **`optional`** **WebkitHyphens**: [`Hyphens`](../type-aliases/Hyphens.md)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitHyphens`](VendorLonghandProperties.md#webkithyphens)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7389

---

### WebkitInitialLetter?

> **`optional`** **WebkitInitialLetter**: [`InitialLetter`](../type-aliases/InitialLetter.md)

The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.

**Syntax**: `normal | [ <number> <integer>? ]`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitInitialLetter`](VendorLonghandProperties.md#webkitinitialletter)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7397

---

### WebkitJustifyContent?

> **`optional`** **WebkitJustifyContent**: [`JustifyContent`](../type-aliases/JustifyContent.md)

The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitJustifyContent`](VendorLonghandProperties.md#webkitjustifycontent)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7405

---

### WebkitLineBreak?

> **`optional`** **WebkitLineBreak**: [`LineBreak`](../type-aliases/LineBreak.md)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitLineBreak`](VendorLonghandProperties.md#webkitlinebreak)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7413

---

### WebkitLineClamp?

> **`optional`** **WebkitLineClamp**: [`WebkitLineClamp`](../type-aliases/WebkitLineClamp.md)

The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block to the specified number of lines.

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitLineClamp`](VendorLonghandProperties.md#webkitlineclamp)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7421

---

### WebkitMarginEnd?

> **`optional`** **WebkitMarginEnd**: [`MarginInlineEnd`](../type-aliases/MarginInlineEnd.md)\<`TLength`\>

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMarginEnd`](VendorLonghandProperties.md#webkitmarginend)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7429

---

### WebkitMarginStart?

> **`optional`** **WebkitMarginStart**: [`MarginInlineStart`](../type-aliases/MarginInlineStart.md)\<`TLength`\>

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMarginStart`](VendorLonghandProperties.md#webkitmarginstart)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7437

---

### WebkitMask?

> **`optional`** **WebkitMask**: [`WebkitMask`](../type-aliases/WebkitMask.md)\<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitMask`](VendorShorthandProperties.md#webkitmask)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7996

---

### WebkitMaskAttachment?

> **`optional`** **WebkitMaskAttachment**: [`WebkitMaskAttachment`](../type-aliases/WebkitMaskAttachment.md)

If a `mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskAttachment`](VendorLonghandProperties.md#webkitmaskattachment)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7445

---

### WebkitMaskBoxImage?

> **`optional`** **WebkitMaskBoxImage**: [`MaskBorder`](../type-aliases/MaskBorder.md)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitMaskBoxImage`](VendorShorthandProperties.md#webkitmaskboximage)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:8002

---

### WebkitMaskBoxImageOutset?

> **`optional`** **WebkitMaskBoxImageOutset**: [`MaskBorderOutset`](../type-aliases/MaskBorderOutset.md)\<`TLength`\>

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskBoxImageOutset`](VendorLonghandProperties.md#webkitmaskboximageoutset)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7453

---

### WebkitMaskBoxImageRepeat?

> **`optional`** **WebkitMaskBoxImageRepeat**: [`MaskBorderRepeat`](../type-aliases/MaskBorderRepeat.md)

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskBoxImageRepeat`](VendorLonghandProperties.md#webkitmaskboximagerepeat)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7461

---

### WebkitMaskBoxImageSlice?

> **`optional`** **WebkitMaskBoxImageSlice**: [`MaskBorderSlice`](../type-aliases/MaskBorderSlice.md)

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskBoxImageSlice`](VendorLonghandProperties.md#webkitmaskboximageslice)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7469

---

### WebkitMaskBoxImageSource?

> **`optional`** **WebkitMaskBoxImageSource**: [`MaskBorderSource`](../type-aliases/MaskBorderSource.md)

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskBoxImageSource`](VendorLonghandProperties.md#webkitmaskboximagesource)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7477

---

### WebkitMaskBoxImageWidth?

> **`optional`** **WebkitMaskBoxImageWidth**: [`MaskBorderWidth`](../type-aliases/MaskBorderWidth.md)\<`TLength`\>

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskBoxImageWidth`](VendorLonghandProperties.md#webkitmaskboximagewidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7485

---

### WebkitMaskClip?

> **`optional`** **WebkitMaskClip**: [`WebkitMaskClip`](../type-aliases/WebkitMaskClip.md)

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <box> | border | padding | content | text ]#`

**Initial value**: `border`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskClip`](VendorLonghandProperties.md#webkitmaskclip)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7493

---

### WebkitMaskComposite?

> **`optional`** **WebkitMaskComposite**: [`WebkitMaskComposite`](../type-aliases/WebkitMaskComposite.md)

The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.

**Syntax**: `<composite-style>#`

**Initial value**: `source-over`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskComposite`](VendorLonghandProperties.md#webkitmaskcomposite)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7501

---

### WebkitMaskImage?

> **`optional`** **WebkitMaskImage**: [`WebkitMaskImage`](../type-aliases/WebkitMaskImage.md)

The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskImage`](VendorLonghandProperties.md#webkitmaskimage)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7509

---

### WebkitMaskOrigin?

> **`optional`** **WebkitMaskOrigin**: [`WebkitMaskOrigin`](../type-aliases/WebkitMaskOrigin.md)

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `[ <box> | border | padding | content ]#`

**Initial value**: `padding`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskOrigin`](VendorLonghandProperties.md#webkitmaskorigin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7517

---

### WebkitMaskPosition?

> **`optional`** **WebkitMaskPosition**: [`WebkitMaskPosition`](../type-aliases/WebkitMaskPosition.md)\<`TLength`\>

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `0% 0%`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskPosition`](VendorLonghandProperties.md#webkitmaskposition)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7525

---

### WebkitMaskPositionX?

> **`optional`** **WebkitMaskPositionX**: [`WebkitMaskPositionX`](../type-aliases/WebkitMaskPositionX.md)\<`TLength`\>

The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.

**Syntax**: `[ <length-percentage> | left | center | right ]#`

**Initial value**: `0%`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskPositionX`](VendorLonghandProperties.md#webkitmaskpositionx)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7533

---

### WebkitMaskPositionY?

> **`optional`** **WebkitMaskPositionY**: [`WebkitMaskPositionY`](../type-aliases/WebkitMaskPositionY.md)\<`TLength`\>

The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.

**Syntax**: `[ <length-percentage> | top | center | bottom ]#`

**Initial value**: `0%`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskPositionY`](VendorLonghandProperties.md#webkitmaskpositiony)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7541

---

### WebkitMaskRepeat?

> **`optional`** **WebkitMaskRepeat**: [`WebkitMaskRepeat`](../type-aliases/WebkitMaskRepeat.md)

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskRepeat`](VendorLonghandProperties.md#webkitmaskrepeat)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7549

---

### WebkitMaskRepeatX?

> **`optional`** **WebkitMaskRepeatX**: [`WebkitMaskRepeatX`](../type-aliases/WebkitMaskRepeatX.md)

The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskRepeatX`](VendorLonghandProperties.md#webkitmaskrepeatx)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7557

---

### WebkitMaskRepeatY?

> **`optional`** **WebkitMaskRepeatY**: [`WebkitMaskRepeatY`](../type-aliases/WebkitMaskRepeatY.md)

The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskRepeatY`](VendorLonghandProperties.md#webkitmaskrepeaty)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7565

---

### WebkitMaskSize?

> **`optional`** **WebkitMaskSize**: [`WebkitMaskSize`](../type-aliases/WebkitMaskSize.md)\<`TLength`\>

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaskSize`](VendorLonghandProperties.md#webkitmasksize)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7573

---

### WebkitMaxInlineSize?

> **`optional`** **WebkitMaxInlineSize**: [`MaxInlineSize`](../type-aliases/MaxInlineSize.md)\<`TLength`\>

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitMaxInlineSize`](VendorLonghandProperties.md#webkitmaxinlinesize)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7581

---

### WebkitOrder?

> **`optional`** **WebkitOrder**: [`Order`](../type-aliases/Order.md)

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitOrder`](VendorLonghandProperties.md#webkitorder)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7589

---

### WebkitOverflowScrolling?

> **`optional`** **WebkitOverflowScrolling**: [`WebkitOverflowScrolling`](../type-aliases/WebkitOverflowScrolling.md)

The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.

**Syntax**: `auto | touch`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitOverflowScrolling`](VendorLonghandProperties.md#webkitoverflowscrolling)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7597

---

### WebkitPaddingEnd?

> **`optional`** **WebkitPaddingEnd**: [`PaddingInlineEnd`](../type-aliases/PaddingInlineEnd.md)\<`TLength`\>

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitPaddingEnd`](VendorLonghandProperties.md#webkitpaddingend)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7605

---

### WebkitPaddingStart?

> **`optional`** **WebkitPaddingStart**: [`PaddingInlineStart`](../type-aliases/PaddingInlineStart.md)\<`TLength`\>

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitPaddingStart`](VendorLonghandProperties.md#webkitpaddingstart)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7613

---

### WebkitPerspective?

> **`optional`** **WebkitPerspective**: [`Perspective`](../type-aliases/Perspective.md)\<`TLength`\>

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitPerspective`](VendorLonghandProperties.md#webkitperspective)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7621

---

### WebkitPerspectiveOrigin?

> **`optional`** **WebkitPerspectiveOrigin**: [`PerspectiveOrigin`](../type-aliases/PerspectiveOrigin.md)\<`TLength`\>

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitPerspectiveOrigin`](VendorLonghandProperties.md#webkitperspectiveorigin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7629

---

### WebkitPrintColorAdjust?

> **`optional`** **WebkitPrintColorAdjust**: [`PrintColorAdjust`](../type-aliases/PrintColorAdjust.md)

The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitPrintColorAdjust`](VendorLonghandProperties.md#webkitprintcoloradjust)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7637

---

### WebkitRubyPosition?

> **`optional`** **WebkitRubyPosition**: [`RubyPosition`](../type-aliases/RubyPosition.md)

The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitRubyPosition`](VendorLonghandProperties.md#webkitrubyposition)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7645

---

### WebkitScrollSnapType?

> **`optional`** **WebkitScrollSnapType**: [`ScrollSnapType`](../type-aliases/ScrollSnapType.md)

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitScrollSnapType`](VendorLonghandProperties.md#webkitscrollsnaptype)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7653

---

### WebkitShapeMargin?

> **`optional`** **WebkitShapeMargin**: [`ShapeMargin`](../type-aliases/ShapeMargin.md)\<`TLength`\>

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitShapeMargin`](VendorLonghandProperties.md#webkitshapemargin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7661

---

### WebkitTapHighlightColor?

> **`optional`** **WebkitTapHighlightColor**: [`WebkitTapHighlightColor`](../type-aliases/WebkitTapHighlightColor.md)

**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.

**Syntax**: `<color>`

**Initial value**: `black`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTapHighlightColor`](VendorLonghandProperties.md#webkittaphighlightcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7669

---

### WebkitTextCombine?

> **`optional`** **WebkitTextCombine**: [`TextCombineUpright`](../type-aliases/TextCombineUpright.md)

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextCombine`](VendorLonghandProperties.md#webkittextcombine)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7677

---

### WebkitTextDecorationColor?

> **`optional`** **WebkitTextDecorationColor**: [`TextDecorationColor`](../type-aliases/TextDecorationColor.md)

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextDecorationColor`](VendorLonghandProperties.md#webkittextdecorationcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7685

---

### WebkitTextDecorationLine?

> **`optional`** **WebkitTextDecorationLine**: [`TextDecorationLine`](../type-aliases/TextDecorationLine.md)

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextDecorationLine`](VendorLonghandProperties.md#webkittextdecorationline)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7693

---

### WebkitTextDecorationSkip?

> **`optional`** **WebkitTextDecorationSkip**: [`TextDecorationSkip`](../type-aliases/TextDecorationSkip.md)

The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextDecorationSkip`](VendorLonghandProperties.md#webkittextdecorationskip)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7701

---

### WebkitTextDecorationStyle?

> **`optional`** **WebkitTextDecorationStyle**: [`TextDecorationStyle`](../type-aliases/TextDecorationStyle.md)

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextDecorationStyle`](VendorLonghandProperties.md#webkittextdecorationstyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7709

---

### WebkitTextEmphasis?

> **`optional`** **WebkitTextEmphasis**: [`TextEmphasis`](../type-aliases/TextEmphasis.md)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitTextEmphasis`](VendorShorthandProperties.md#webkittextemphasis)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:8008

---

### WebkitTextEmphasisColor?

> **`optional`** **WebkitTextEmphasisColor**: [`TextEmphasisColor`](../type-aliases/TextEmphasisColor.md)

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextEmphasisColor`](VendorLonghandProperties.md#webkittextemphasiscolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7717

---

### WebkitTextEmphasisPosition?

> **`optional`** **WebkitTextEmphasisPosition**: [`TextEmphasisPosition`](../type-aliases/TextEmphasisPosition.md)

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextEmphasisPosition`](VendorLonghandProperties.md#webkittextemphasisposition)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7725

---

### WebkitTextEmphasisStyle?

> **`optional`** **WebkitTextEmphasisStyle**: [`TextEmphasisStyle`](../type-aliases/TextEmphasisStyle.md)

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextEmphasisStyle`](VendorLonghandProperties.md#webkittextemphasisstyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7733

---

### WebkitTextFillColor?

> **`optional`** **WebkitTextFillColor**: [`WebkitTextFillColor`](../type-aliases/WebkitTextFillColor.md)

The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextFillColor`](VendorLonghandProperties.md#webkittextfillcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7741

---

### WebkitTextOrientation?

> **`optional`** **WebkitTextOrientation**: [`TextOrientation`](../type-aliases/TextOrientation.md)

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextOrientation`](VendorLonghandProperties.md#webkittextorientation)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7749

---

### WebkitTextSizeAdjust?

> **`optional`** **WebkitTextSizeAdjust**: [`TextSizeAdjust`](../type-aliases/TextSizeAdjust.md)

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextSizeAdjust`](VendorLonghandProperties.md#webkittextsizeadjust)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7757

---

### WebkitTextStroke?

> **`optional`** **WebkitTextStroke**: [`WebkitTextStroke`](../type-aliases/WebkitTextStroke.md)\<`TLength`\>

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitTextStroke`](VendorShorthandProperties.md#webkittextstroke)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:8014

---

### WebkitTextStrokeColor?

> **`optional`** **WebkitTextStrokeColor**: [`WebkitTextStrokeColor`](../type-aliases/WebkitTextStrokeColor.md)

The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextStrokeColor`](VendorLonghandProperties.md#webkittextstrokecolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7765

---

### WebkitTextStrokeWidth?

> **`optional`** **WebkitTextStrokeWidth**: [`WebkitTextStrokeWidth`](../type-aliases/WebkitTextStrokeWidth.md)\<`TLength`\>

The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextStrokeWidth`](VendorLonghandProperties.md#webkittextstrokewidth)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7773

---

### WebkitTextUnderlinePosition?

> **`optional`** **WebkitTextUnderlinePosition**: [`TextUnderlinePosition`](../type-aliases/TextUnderlinePosition.md)

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTextUnderlinePosition`](VendorLonghandProperties.md#webkittextunderlineposition)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7781

---

### WebkitTouchCallout?

> **`optional`** **WebkitTouchCallout**: [`WebkitTouchCallout`](../type-aliases/WebkitTouchCallout.md)

The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.

**Syntax**: `default | none`

**Initial value**: `default`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTouchCallout`](VendorLonghandProperties.md#webkittouchcallout)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7789

---

### WebkitTransform?

> **`optional`** **WebkitTransform**: [`Transform`](../type-aliases/Transform.md)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTransform`](VendorLonghandProperties.md#webkittransform)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7797

---

### WebkitTransformOrigin?

> **`optional`** **WebkitTransformOrigin**: [`TransformOrigin`](../type-aliases/TransformOrigin.md)\<`TLength`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTransformOrigin`](VendorLonghandProperties.md#webkittransformorigin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7805

---

### WebkitTransformStyle?

> **`optional`** **WebkitTransformStyle**: [`TransformStyle`](../type-aliases/TransformStyle.md)

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTransformStyle`](VendorLonghandProperties.md#webkittransformstyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7813

---

### WebkitTransition?

> **`optional`** **WebkitTransition**: [`Transition`](../type-aliases/Transition.md)\<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`WebkitTransition`](VendorShorthandProperties.md#webkittransition)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:8020

---

### WebkitTransitionDelay?

> **`optional`** **WebkitTransitionDelay**: [`TransitionDelay`](../type-aliases/TransitionDelay.md)\<`TTime`\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTransitionDelay`](VendorLonghandProperties.md#webkittransitiondelay)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7821

---

### WebkitTransitionDuration?

> **`optional`** **WebkitTransitionDuration**: [`TransitionDuration`](../type-aliases/TransitionDuration.md)\<`TTime`\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTransitionDuration`](VendorLonghandProperties.md#webkittransitionduration)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7829

---

### WebkitTransitionProperty?

> **`optional`** **WebkitTransitionProperty**: [`TransitionProperty`](../type-aliases/TransitionProperty.md)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTransitionProperty`](VendorLonghandProperties.md#webkittransitionproperty)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7837

---

### WebkitTransitionTimingFunction?

> **`optional`** **WebkitTransitionTimingFunction**: [`TransitionTimingFunction`](../type-aliases/TransitionTimingFunction.md)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitTransitionTimingFunction`](VendorLonghandProperties.md#webkittransitiontimingfunction)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7845

---

### WebkitUserModify?

> **`optional`** **WebkitUserModify**: [`WebkitUserModify`](../type-aliases/WebkitUserModify.md)

**Syntax**: `read-only | read-write | read-write-plaintext-only`

**Initial value**: `read-only`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitUserModify`](VendorLonghandProperties.md#webkitusermodify)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7851

---

### WebkitUserSelect?

> **`optional`** **WebkitUserSelect**: [`UserSelect`](../type-aliases/UserSelect.md)

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitUserSelect`](VendorLonghandProperties.md#webkituserselect)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7859

---

### WebkitWritingMode?

> **`optional`** **WebkitWritingMode**: [`WritingMode`](../type-aliases/WritingMode.md)

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`WebkitWritingMode`](VendorLonghandProperties.md#webkitwritingmode)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7867

---

### msAccelerator?

> **`optional`** **msAccelerator**: [`MsAccelerator`](../type-aliases/MsAccelerator.md)

The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.

**Syntax**: `false | true`

**Initial value**: `false`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msAccelerator`](VendorLonghandProperties.md#msaccelerator)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6523

---

### msBlockProgression?

> **`optional`** **msBlockProgression**: [`MsBlockProgression`](../type-aliases/MsBlockProgression.md)

The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.

**Syntax**: `tb | rl | bt | lr`

**Initial value**: `tb`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msBlockProgression`](VendorLonghandProperties.md#msblockprogression)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6531

---

### msContentZoomChaining?

> **`optional`** **msContentZoomChaining**: [`MsContentZoomChaining`](../type-aliases/MsContentZoomChaining.md)

The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.

**Syntax**: `none | chained`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msContentZoomChaining`](VendorLonghandProperties.md#mscontentzoomchaining)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6539

---

### msContentZoomLimit?

> **`optional`** **msContentZoomLimit**: [`MsContentZoomLimit`](../type-aliases/MsContentZoomLimit.md)

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`msContentZoomLimit`](VendorShorthandProperties.md#mscontentzoomlimit)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7906

---

### msContentZoomLimitMax?

> **`optional`** **msContentZoomLimitMax**: [`MsContentZoomLimitMax`](../type-aliases/MsContentZoomLimitMax.md)

The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `400%`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msContentZoomLimitMax`](VendorLonghandProperties.md#mscontentzoomlimitmax)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6547

---

### msContentZoomLimitMin?

> **`optional`** **msContentZoomLimitMin**: [`MsContentZoomLimitMin`](../type-aliases/MsContentZoomLimitMin.md)

The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `100%`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msContentZoomLimitMin`](VendorLonghandProperties.md#mscontentzoomlimitmin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6555

---

### msContentZoomSnap?

> **`optional`** **msContentZoomSnap**: [`MsContentZoomSnap`](../type-aliases/MsContentZoomSnap.md)

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`msContentZoomSnap`](VendorShorthandProperties.md#mscontentzoomsnap)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7912

---

### msContentZoomSnapPoints?

> **`optional`** **msContentZoomSnapPoints**: [`MsContentZoomSnapPoints`](../type-aliases/MsContentZoomSnapPoints.md)

The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.

**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`

**Initial value**: `snapInterval(0%, 100%)`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msContentZoomSnapPoints`](VendorLonghandProperties.md#mscontentzoomsnappoints)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6563

---

### msContentZoomSnapType?

> **`optional`** **msContentZoomSnapType**: [`MsContentZoomSnapType`](../type-aliases/MsContentZoomSnapType.md)

The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msContentZoomSnapType`](VendorLonghandProperties.md#mscontentzoomsnaptype)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6571

---

### msContentZooming?

> **`optional`** **msContentZooming**: [`MsContentZooming`](../type-aliases/MsContentZooming.md)

The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.

**Syntax**: `none | zoom`

**Initial value**: zoom for the top level element, none for all other elements

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msContentZooming`](VendorLonghandProperties.md#mscontentzooming)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6579

---

### msFilter?

> **`optional`** **msFilter**: [`MsFilter`](../type-aliases/MsFilter.md)

The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.

**Syntax**: `<string>`

**Initial value**: "" (the empty string)

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msFilter`](VendorLonghandProperties.md#msfilter)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6587

---

### msFlex?

> **`optional`** **msFlex**: [`Flex`](../type-aliases/Flex.md)\<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`msFlex`](VendorShorthandProperties.md#msflex)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7918

---

### msFlexDirection?

> **`optional`** **msFlexDirection**: [`FlexDirection`](../type-aliases/FlexDirection.md)

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msFlexDirection`](VendorLonghandProperties.md#msflexdirection)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6595

---

### msFlexPositive?

> **`optional`** **msFlexPositive**: [`FlexGrow`](../type-aliases/FlexGrow.md)

The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msFlexPositive`](VendorLonghandProperties.md#msflexpositive)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6603

---

### msFlowFrom?

> **`optional`** **msFlowFrom**: [`MsFlowFrom`](../type-aliases/MsFlowFrom.md)

The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msFlowFrom`](VendorLonghandProperties.md#msflowfrom)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6611

---

### msFlowInto?

> **`optional`** **msFlowInto**: [`MsFlowInto`](../type-aliases/MsFlowInto.md)

The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msFlowInto`](VendorLonghandProperties.md#msflowinto)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6619

---

### msGridColumns?

> **`optional`** **msGridColumns**: [`MsGridColumns`](../type-aliases/MsGridColumns.md)\<`TLength`\>

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msGridColumns`](VendorLonghandProperties.md#msgridcolumns)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6627

---

### msGridRows?

> **`optional`** **msGridRows**: [`MsGridRows`](../type-aliases/MsGridRows.md)\<`TLength`\>

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msGridRows`](VendorLonghandProperties.md#msgridrows)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6635

---

### msHighContrastAdjust?

> **`optional`** **msHighContrastAdjust**: [`MsHighContrastAdjust`](../type-aliases/MsHighContrastAdjust.md)

The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.

**Syntax**: `auto | none`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msHighContrastAdjust`](VendorLonghandProperties.md#mshighcontrastadjust)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6643

---

### msHyphenateLimitChars?

> **`optional`** **msHyphenateLimitChars**: [`MsHyphenateLimitChars`](../type-aliases/MsHyphenateLimitChars.md)

The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.

**Syntax**: `auto | <integer>{1,3}`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msHyphenateLimitChars`](VendorLonghandProperties.md#mshyphenatelimitchars)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6651

---

### msHyphenateLimitLines?

> **`optional`** **msHyphenateLimitLines**: [`MsHyphenateLimitLines`](../type-aliases/MsHyphenateLimitLines.md)

The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.

**Syntax**: `no-limit | <integer>`

**Initial value**: `no-limit`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msHyphenateLimitLines`](VendorLonghandProperties.md#mshyphenatelimitlines)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6659

---

### msHyphenateLimitZone?

> **`optional`** **msHyphenateLimitZone**: [`MsHyphenateLimitZone`](../type-aliases/MsHyphenateLimitZone.md)\<`TLength`\>

The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.

**Syntax**: `<percentage> | <length>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msHyphenateLimitZone`](VendorLonghandProperties.md#mshyphenatelimitzone)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6667

---

### msHyphens?

> **`optional`** **msHyphens**: [`Hyphens`](../type-aliases/Hyphens.md)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msHyphens`](VendorLonghandProperties.md#mshyphens)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6675

---

### msImeAlign?

> **`optional`** **msImeAlign**: [`MsImeAlign`](../type-aliases/MsImeAlign.md)

The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.

**Syntax**: `auto | after`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msImeAlign`](VendorLonghandProperties.md#msimealign)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6683

---

### msLineBreak?

> **`optional`** **msLineBreak**: [`LineBreak`](../type-aliases/LineBreak.md)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msLineBreak`](VendorLonghandProperties.md#mslinebreak)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6691

---

### msOrder?

> **`optional`** **msOrder**: [`Order`](../type-aliases/Order.md)

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msOrder`](VendorLonghandProperties.md#msorder)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6699

---

### msOverflowStyle?

> **`optional`** **msOverflowStyle**: [`MsOverflowStyle`](../type-aliases/MsOverflowStyle.md)

The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.

**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msOverflowStyle`](VendorLonghandProperties.md#msoverflowstyle)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6707

---

### msOverflowX?

> **`optional`** **msOverflowX**: [`OverflowX`](../type-aliases/OverflowX.md)

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msOverflowX`](VendorLonghandProperties.md#msoverflowx)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6715

---

### msOverflowY?

> **`optional`** **msOverflowY**: [`OverflowY`](../type-aliases/OverflowY.md)

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msOverflowY`](VendorLonghandProperties.md#msoverflowy)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6723

---

### msScrollChaining?

> **`optional`** **msScrollChaining**: [`MsScrollChaining`](../type-aliases/MsScrollChaining.md)

The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.

**Syntax**: `chained | none`

**Initial value**: `chained`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollChaining`](VendorLonghandProperties.md#msscrollchaining)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6731

---

### msScrollLimit?

> **`optional`** **msScrollLimit**: [`MsScrollLimit`](../type-aliases/MsScrollLimit.md)

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`msScrollLimit`](VendorShorthandProperties.md#msscrolllimit)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7924

---

### msScrollLimitXMax?

> **`optional`** **msScrollLimitXMax**: [`MsScrollLimitXMax`](../type-aliases/MsScrollLimitXMax.md)\<`TLength`\>

The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollLimitXMax`](VendorLonghandProperties.md#msscrolllimitxmax)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6739

---

### msScrollLimitXMin?

> **`optional`** **msScrollLimitXMin**: [`MsScrollLimitXMin`](../type-aliases/MsScrollLimitXMin.md)\<`TLength`\>

The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollLimitXMin`](VendorLonghandProperties.md#msscrolllimitxmin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6747

---

### msScrollLimitYMax?

> **`optional`** **msScrollLimitYMax**: [`MsScrollLimitYMax`](../type-aliases/MsScrollLimitYMax.md)\<`TLength`\>

The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollLimitYMax`](VendorLonghandProperties.md#msscrolllimitymax)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6755

---

### msScrollLimitYMin?

> **`optional`** **msScrollLimitYMin**: [`MsScrollLimitYMin`](../type-aliases/MsScrollLimitYMin.md)\<`TLength`\>

The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollLimitYMin`](VendorLonghandProperties.md#msscrolllimitymin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6763

---

### msScrollRails?

> **`optional`** **msScrollRails**: [`MsScrollRails`](../type-aliases/MsScrollRails.md)

The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.

**Syntax**: `none | railed`

**Initial value**: `railed`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollRails`](VendorLonghandProperties.md#msscrollrails)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6771

---

### msScrollSnapPointsX?

> **`optional`** **msScrollSnapPointsX**: [`MsScrollSnapPointsX`](../type-aliases/MsScrollSnapPointsX.md)

The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollSnapPointsX`](VendorLonghandProperties.md#msscrollsnappointsx)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6779

---

### msScrollSnapPointsY?

> **`optional`** **msScrollSnapPointsY**: [`MsScrollSnapPointsY`](../type-aliases/MsScrollSnapPointsY.md)

The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollSnapPointsY`](VendorLonghandProperties.md#msscrollsnappointsy)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6787

---

### msScrollSnapType?

> **`optional`** **msScrollSnapType**: [`MsScrollSnapType`](../type-aliases/MsScrollSnapType.md)

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollSnapType`](VendorLonghandProperties.md#msscrollsnaptype)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6795

---

### msScrollSnapX?

> **`optional`** **msScrollSnapX**: [`MsScrollSnapX`](../type-aliases/MsScrollSnapX.md)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`msScrollSnapX`](VendorShorthandProperties.md#msscrollsnapx)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7930

---

### msScrollSnapY?

> **`optional`** **msScrollSnapY**: [`MsScrollSnapY`](../type-aliases/MsScrollSnapY.md)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`msScrollSnapY`](VendorShorthandProperties.md#msscrollsnapy)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7936

---

### msScrollTranslation?

> **`optional`** **msScrollTranslation**: [`MsScrollTranslation`](../type-aliases/MsScrollTranslation.md)

The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.

**Syntax**: `none | vertical-to-horizontal`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollTranslation`](VendorLonghandProperties.md#msscrolltranslation)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6803

---

### msScrollbar3dlightColor?

> **`optional`** **msScrollbar3dlightColor**: [`MsScrollbar3dlightColor`](../type-aliases/MsScrollbar3dlightColor.md)

The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbar3dlightColor`](VendorLonghandProperties.md#msscrollbar3dlightcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6811

---

### msScrollbarArrowColor?

> **`optional`** **msScrollbarArrowColor**: [`MsScrollbarArrowColor`](../type-aliases/MsScrollbarArrowColor.md)

The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.

**Syntax**: `<color>`

**Initial value**: `ButtonText`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbarArrowColor`](VendorLonghandProperties.md#msscrollbararrowcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6819

---

### msScrollbarBaseColor?

> **`optional`** **msScrollbarBaseColor**: [`MsScrollbarBaseColor`](../type-aliases/MsScrollbarBaseColor.md)

The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbarBaseColor`](VendorLonghandProperties.md#msscrollbarbasecolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6827

---

### msScrollbarDarkshadowColor?

> **`optional`** **msScrollbarDarkshadowColor**: [`MsScrollbarDarkshadowColor`](../type-aliases/MsScrollbarDarkshadowColor.md)

The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbarDarkshadowColor`](VendorLonghandProperties.md#msscrollbardarkshadowcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6835

---

### msScrollbarFaceColor?

> **`optional`** **msScrollbarFaceColor**: [`MsScrollbarFaceColor`](../type-aliases/MsScrollbarFaceColor.md)

The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDFace`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbarFaceColor`](VendorLonghandProperties.md#msscrollbarfacecolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6843

---

### msScrollbarHighlightColor?

> **`optional`** **msScrollbarHighlightColor**: [`MsScrollbarHighlightColor`](../type-aliases/MsScrollbarHighlightColor.md)

The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDHighlight`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbarHighlightColor`](VendorLonghandProperties.md#msscrollbarhighlightcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6851

---

### msScrollbarShadowColor?

> **`optional`** **msScrollbarShadowColor**: [`MsScrollbarShadowColor`](../type-aliases/MsScrollbarShadowColor.md)

The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbarShadowColor`](VendorLonghandProperties.md#msscrollbarshadowcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6859

---

### msScrollbarTrackColor?

> **`optional`** **msScrollbarTrackColor**: [`MsScrollbarTrackColor`](../type-aliases/MsScrollbarTrackColor.md)

The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.

**Syntax**: `<color>`

**Initial value**: `Scrollbar`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msScrollbarTrackColor`](VendorLonghandProperties.md#msscrollbartrackcolor)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6867

---

### msTextAutospace?

> **`optional`** **msTextAutospace**: [`MsTextAutospace`](../type-aliases/MsTextAutospace.md)

The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.

**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTextAutospace`](VendorLonghandProperties.md#mstextautospace)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6875

---

### msTextCombineHorizontal?

> **`optional`** **msTextCombineHorizontal**: [`TextCombineUpright`](../type-aliases/TextCombineUpright.md)

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTextCombineHorizontal`](VendorLonghandProperties.md#mstextcombinehorizontal)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6883

---

### msTextOverflow?

> **`optional`** **msTextOverflow**: [`TextOverflow`](../type-aliases/TextOverflow.md)

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTextOverflow`](VendorLonghandProperties.md#mstextoverflow)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6891

---

### msTouchAction?

> **`optional`** **msTouchAction**: [`TouchAction`](../type-aliases/TouchAction.md)

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTouchAction`](VendorLonghandProperties.md#mstouchaction)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6899

---

### msTouchSelect?

> **`optional`** **msTouchSelect**: [`MsTouchSelect`](../type-aliases/MsTouchSelect.md)

The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.

**Syntax**: `grippers | none`

**Initial value**: `grippers`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTouchSelect`](VendorLonghandProperties.md#mstouchselect)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6907

---

### msTransform?

> **`optional`** **msTransform**: [`Transform`](../type-aliases/Transform.md)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTransform`](VendorLonghandProperties.md#mstransform)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6915

---

### msTransformOrigin?

> **`optional`** **msTransformOrigin**: [`TransformOrigin`](../type-aliases/TransformOrigin.md)\<`TLength`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTransformOrigin`](VendorLonghandProperties.md#mstransformorigin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6923

---

### msTransition?

> **`optional`** **msTransition**: [`Transition`](../type-aliases/Transition.md)\<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[`VendorShorthandProperties`](VendorShorthandProperties.md).[`msTransition`](VendorShorthandProperties.md#mstransition)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7942

---

### msTransitionDelay?

> **`optional`** **msTransitionDelay**: [`TransitionDelay`](../type-aliases/TransitionDelay.md)\<`TTime`\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTransitionDelay`](VendorLonghandProperties.md#mstransitiondelay)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6931

---

### msTransitionDuration?

> **`optional`** **msTransitionDuration**: [`TransitionDuration`](../type-aliases/TransitionDuration.md)\<`TTime`\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTransitionDuration`](VendorLonghandProperties.md#mstransitionduration)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6939

---

### msTransitionProperty?

> **`optional`** **msTransitionProperty**: [`TransitionProperty`](../type-aliases/TransitionProperty.md)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTransitionProperty`](VendorLonghandProperties.md#mstransitionproperty)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6947

---

### msTransitionTimingFunction?

> **`optional`** **msTransitionTimingFunction**: [`TransitionTimingFunction`](../type-aliases/TransitionTimingFunction.md)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msTransitionTimingFunction`](VendorLonghandProperties.md#mstransitiontimingfunction)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6955

---

### msUserSelect?

> **`optional`** **msUserSelect**: [`MsUserSelect`](../type-aliases/MsUserSelect.md)

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `none | element | text`

**Initial value**: `text`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msUserSelect`](VendorLonghandProperties.md#msuserselect)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6963

---

### msWordBreak?

> **`optional`** **msWordBreak**: [`WordBreak`](../type-aliases/WordBreak.md)

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msWordBreak`](VendorLonghandProperties.md#mswordbreak)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6971

---

### msWrapFlow?

> **`optional`** **msWrapFlow**: [`MsWrapFlow`](../type-aliases/MsWrapFlow.md)

The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.

**Syntax**: `auto | both | start | end | maximum | clear`

**Initial value**: `auto`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msWrapFlow`](VendorLonghandProperties.md#mswrapflow)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6979

---

### msWrapMargin?

> **`optional`** **msWrapMargin**: [`MsWrapMargin`](../type-aliases/MsWrapMargin.md)\<`TLength`\>

The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msWrapMargin`](VendorLonghandProperties.md#mswrapmargin)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6987

---

### msWrapThrough?

> **`optional`** **msWrapThrough**: [`MsWrapThrough`](../type-aliases/MsWrapThrough.md)

The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.

**Syntax**: `wrap | none`

**Initial value**: `wrap`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msWrapThrough`](VendorLonghandProperties.md#mswrapthrough)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:6995

---

### msWritingMode?

> **`optional`** **msWritingMode**: [`WritingMode`](../type-aliases/WritingMode.md)

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

[`VendorLonghandProperties`](VendorLonghandProperties.md).[`msWritingMode`](VendorLonghandProperties.md#mswritingmode)

#### Source

node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts:7003
