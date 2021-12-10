<template>
  <div :class="[$style.root, 'container']">
    <div :class="$style.content">
      <h1>Telegram Ad Platform Explained</h1>

      <Blockquote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi et eum in <strong>molestiae nisi</strong> porro quaerat
        <a href="#"><strong>quibusdam</strong></a>  quos vero!
      </Blockquote>

      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium aut eius eos ex nulla, ratione reiciendis sint voluptas?
        Amet at atque blanditiis consectetur dolorem est et fuga id nobis nulla,
        officia saepe ut, voluptatum. Accusantium assumenda dolor ipsam magnam molestias,
        nulla perspiciatis, placeat qui quidem sit tempore voluptas voluptate voluptatum!
      </p>

      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam amet aspernatur blanditiis fugit maiores ratione voluptatibus!
        Alias architecto aspernatur atque consequuntur, cum deleniti deserunt dicta
        dolorum eum exercitationem expedita facilis harum, incidunt laborum laudantium
        molestias necessitatibus nesciunt nisi officiis,
        omnis quos ratione recusandae rem repellendus suscipit veniam vero? Voluptas?
      </p>

      <Blockquote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eum, facere, nemo? Consectetur corporis culpa cum distinctio exercitationem harum hic,
        impedit inventore, ipsa nostrum, perspiciatis quae quos sit tempore vel voluptatibus.
      </Blockquote>

      <h2>Lorem ipsum dolor sit amet.</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiis consequatur deleniti eligendi eos hic iusto,
        laudantium molestiae <strong>molestias nemo nulla</strong> reprehenderit tempora velit?
        Aperiam dolores earum est explicabo illo minus, mollitia necessitatibus quas quibusdam quis,
        reiciendis rem reprehenderit sapiente vel voluptatum.
        Adipisci autem beatae culpa facere pariatur voluptas?
        Aliquid corporis dicta ea <strong>eius eveniet itaque</strong>
        rem sapiente veniam voluptas voluptatem.
      </p>

      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aliquid excepturi minus molestias. Ea fuga nostrum quaerat.
          A architecto asperiores beatae corporis culpa cupiditate deleniti eius error esse
          et hic illo libero molestias numquam odio optio porro quasi qui quia quibusdam,
          quis quo quos rem tempora ut, veniam vitae.
          Autem dolore dolorem ea ipsam itaque numquam omnis, quas? Adipisci?
        </li>
        <li>
          Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipisicing elit.
          Blanditiis doloremque expedita ipsam ipsum nulla
          quam sapiente similique vel veniam voluptatibus!
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, rerum.</li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad asperiores excepturi in laborum natus neque
          odio officiis quaerat quam tempora.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Blockquote } from '../components'
</script>

<style lang="stylus" module>
.root {
  padding: 0 15px 60px
}

.content {
  max-width: 800px
  margin: 0 auto
}
</style>
