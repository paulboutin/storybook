import '../sass/base/_colors.scss'

export default {
  title: 'Design System'
}

// TODO: replace in-lined styles with classes when framework is chosebn

export const Colors = () => `
<div class="container" style="font-family: sans-serif;">
  
    <div style="width: 18rem; color: var(--color-white)">
      <h5 style="color: var(--color-black)">Green</h5>
      <div style="background: var(--color-green-light); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          green-lighten-5
      </div>
      <div style="background: var(--color-green); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          base-green
      </div>
      <div style="background: var(--color-green-dark); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          green-darken-10
      </div>
      <div style="background: var(--color-green-darker); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          green-darken-20
      </div>
    </div>
    
    <div style="width: 18rem;">
      <h5>Yellow</h5>
      <div style="background: var(--color-yellow-light); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          yellow-lighten-10
      </div>
      <div style="background: var(--color-yellow); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          base-yellow
      </div>
      <div style="background: var(--color-yellow-dark); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          yellow-darken-10
      </div>
      <div style="background: var(--color-yellow-darker); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          yellow-darken-20
      </div>
    </div>
    
    <div style="width: 18rem; color: var(--color-white)">
      <h5 style="color: var(--color-black)">Blue</h5>
      <div style="background: var(--color-blue-light); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          blue-lighten-10
      </div>
      <div style="background: var(--color-blue); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          base-blue
      </div>
      <div style="background: var(--color-blue-dark); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          blue-darken-5
      </div>
      <div style="background: var(--color-blue-darker); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          blue-darken-15
      </div>
    </div>
  
    <div style="width: 18rem; color: var(--color-white)">
      <h5 style="color: var(--color-black)">Greyscale</h5>
      <div style="background: var(--color-black); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          black
      </div>
      <div style="background: var(--color-darkgrey); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          darkgrey
      </div>
      <div style="background: var(--color-darkgrey-85); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          darkgrey-85
      </div>
      <div style="background: var(--color-darkgrey-70); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          darkgrey-70
      </div>
      <div style="background: var(--color-darkgrey-55); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          darkgrey-55
      </div>
      <div style="background: var(--color-darkgrey-40); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          darkgrey-40
      </div>
      <div style="background: var(--color-darkgrey-25); margin-bottom:5px; padding: 5px; border-radius: 5px; color: var(--color-black)">
          darkgrey-25
      </div>
      <div style="background: var(--color-darkgrey-15); margin-bottom:5px; padding: 5px; border-radius: 5px; color: var(--color-black)">
          darkgrey-15
      </div>
      <div style="background: var(--color-white); margin-bottom:5px; padding: 5px; border-radius: 5px; color: var(--color-black); border: 1px solid var(--color-black)">
          white
      </div>
    </div>    
  
    <div style="width: 18rem; color: var(--color-white)">
      <h5 style="color: var(--color-black)">Success</h5>
      <div style="background: var(--color-success-light); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          success-lighten-5
      </div>
      <div style="background: var(--color-success); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          base-success
      </div>
      <div style="background: var(--color-success-dark); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          success-darken-5
      </div>
      <div style="background: var(--color-success-darker); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          success-darken-10
      </div>
    </div>    
  
    <div style="width: 18rem; color: var(--color-white)">
      <h5 style="color: var(--color-black)">Error</h5>
      <div style="background: var(--color-error-light); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          error-lighten-10
      </div>
      <div style="background: var(--color-error); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          base-error
      </div>
      <div style="background: var(--color-error-dark); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          error-darken-10
      </div>
      <div style="background: var(--color-error-darker); margin-bottom:5px; padding: 5px; border-radius: 5px;">
          error-darken-20
      </div>
    </div>
    
</div>
`

export const Typography = () => '<h1>Hello World</h1>'
