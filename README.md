# New Thing Learned

1. Custom color in Tailwind CSS v4
    ```css
    /* index.css */
    @theme{
      --color-bumbardino: #FFAAAA;
    }
    ```
    ```html
    <h1 class="text-bumbardino">Hello World</h1>
    ```
2. change base styling globally using `@layer base`
    - no need to give class to the h1 and p tag in HTML as it `@layer base` applies globally.
    ```css
    /* index.css */
    @layer base{
      h1{
        @apply text-2xl font-bold;
      }
      
      p{
        @apply color-pink-900 p-2 bg-pink-300;
      }
    }
    ```
    ```html
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
    ```
3. create frequently used styling for components using `@layer components`
   - lets us create our custom components
   - create custom component in `@layer components` and give the component class name to the element.
    ```css
    /* index.css */
    @layer components{
      .btn{
        @apply @apply p-2 bg-indigo-300 rounded-md font-bold;
      }
    }
    ```
    ```html
    <button class="btn">button</button>
    ```
4. create utility styles using `@layer utility`
    - no need to give class to the h1 and p tag in HTML as it `@layer base` applies globally.
    ```css
    /* index.css */
    @utility flex-center{
      @apply flex justify-center items-center;
    }
    ```
    ```html
    <div class="flex-center h-100 w-100 mx-auto">
      <div class="h-4 w-4 bg-pink-400"></div>
    </div>
    ```
5. using `@font-face` to import font
   - use `@font-face` before `@import "tailwindcss"`
   ```css
   @font-face {
      font-family: "Karla";
      src: url("./assets/fonts/Karla-VariableFont_wght.ttf") format("truetype");
      font-weight: 100 900;
      font-style: normal;
      font-display: swap;
   }

   @import "tailwindcss";

   @theme{
      --font-karla: "Karla", sans-serif;
   }
   ```
   ```html
   <p class="text-2xl font-karla font-black">This is a karla font</p>
   ```
      
6. custom spacing
   1. create custom spacing variables
      ```css
      @theme{
        --spacing-100: 0.5rem;
        --spacing-200: 1rem;
        --spacing-300: 1.5rem;
        --spacing-400: 2rem;
      }
      ```
      ```html
      <div class="flex gap-(--spacing-400) | gap-[var(--spacing-200)] "></div>
      ```
   2. customize existing default tailwind spacing
      - it will set the base spacing to 0.5rem instead of 0.25rem and dynamically calculate the values
      ```css
      @theme{
        --spacing: 0.5rem;
      }
      ```
      ```html
      <div class="flex gap-4"></div>
      ```