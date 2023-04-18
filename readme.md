5 Minds
===============

Este é um projeto que usa Yarn e Gulp para gerenciar dependências e automatizar tarefas.

Requisitos
----------

Antes de começar, você precisa ter o Node.js e o Yarn instalados em seu computador. Você pode baixar o Node.js em [nodejs.org](https://nodejs.org/) e instalar o Yarn seguindo as instruções em [yarnpkg.com](https://yarnpkg.com/).

Instalação
----------

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

bashCopy code

`yarn install`

Isso instalará todas as dependências necessárias para o projeto.

Executando o projeto
--------------------

Para executar o projeto, você pode usar o Gulp para construir e servir o site em um servidor local. Para fazer isso, execute o seguinte comando no terminal:

bashCopy code

`gulp`

Isso iniciará o servidor local e abrirá o site em seu navegador padrão. Qualquer alteração que você fizer no código será automaticamente atualizada no navegador.

Tarefas do Gulp disponíveis
---------------------------

*   `gulp`: Inicia as tarefas de automatização.
*   `gulp build`: Compila o código do projeto para a pasta "build/".

Conclusão
---------

Espero que este arquivo README ajude você a executar e desenvolver o projeto usando Yarn e Gulp. Sinta-se à vontade para personalizar ou adicionar mais tarefas do Gulp conforme necessário. Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato comigo. Obrigado por usar este projeto!

- __template\-default__
   - [build.sh](build.sh)
   - [codiga.yml](codiga.yml)
   - [config.js](config.js)
   - __gulp\-tasks__
     - [clean.js](gulp-tasks/clean.js)
     - [fonts.js](gulp-tasks/fonts.js)
     - [images.js](gulp-tasks/images.js)
     - [js.js](gulp-tasks/js.js)
     - [public.js](gulp-tasks/public.js)
     - [server.js](gulp-tasks/server.js)
     - [styles.js](gulp-tasks/styles.js)
     - [svg.js](gulp-tasks/svg.js)
     - [video.js](gulp-tasks/video.js)
     - [watch.js](gulp-tasks/watch.js)
     - [webpack.js](gulp-tasks/webpack.js)
   - [gulpfile.js](gulpfile.js)
   - [jsconfig.json](jsconfig.json)
   - [list.md](list.md)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - [paths.js](paths.js)
   - [tsconfig.json](tsconfig.json)
   - __web__
     - __assets__
       - __images__
       - __js__
         - [bundle.js](web/assets/js/bundle.js)
       - __sass__
         - [\_colors.scss](web/assets/sass/_colors.scss)
         - [\_constants.scss](web/assets/sass/_constants.scss)
         - [\_extends.scss](web/assets/sass/_extends.scss)
         - [\_fonts.scss](web/assets/sass/_fonts.scss)
         - [\_global.sass](web/assets/sass/_global.sass)
         - [\_reset.sass](web/assets/sass/_reset.sass)
         - [common.scss](web/assets/sass/common.scss)
         - __grid__
           - [\_breakpoints.scss](web/assets/sass/grid/_breakpoints.scss)
           - [\_grid\-mix.scss](web/assets/sass/grid/_grid-mix.scss)
           - [\_visibility.scss](web/assets/sass/grid/_visibility.scss)
           - [grid.scss](web/assets/sass/grid/grid.scss)
         - __lib__
           - [\_base.sass](web/assets/sass/lib/_base.sass)
           - [\_font\-face.scss](web/assets/sass/lib/_font-face.scss)
           - [\_functions.scss](web/assets/sass/lib/_functions.scss)
           - [\_media.scss](web/assets/sass/lib/_media.scss)
           - [\_mixins.sass](web/assets/sass/lib/_mixins.sass)
           - [\_sprites.sass](web/assets/sass/lib/_sprites.sass)
   - [webpack.config.js](webpack.config.js)

