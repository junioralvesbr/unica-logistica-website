## 📋 Descrição: 
 Projeto de freelance para empresa Unica Entregas Delicadas [https://unicaentrega.com.br/](https://unicaentrega.com.br/).</br>
 A Unica entregas é uma startup que precisava de presença na internet para poder buscar investidores.</br>
 O site trouxe credibilidade e visibilidade a empresa o que fez ela ser uma empresa atrativa aos clientes, investidores e prestadores de serviço.

## 🔧 Tecnologias Utilizada:
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
#

## 📄 Aprendizado:
Esse site foi todo construido em HTML puro com tailwind.</br>
Isso foi necessário por causa da hospedagem do cliente que não suportava tecnologias como react.</br>
Toda vez que for fazer o deploy, é necessário construir um arquivo de ccs gerado pelo tailwind.</br>

#
## Contato:
### Junior Alves
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/junior-alves-54559070/)
[![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/junioralvesbr4/)
[![Gmail](https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red)](mailto:jrnalves@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/junioralvesbr)

# ```Criar o build do site```
 - O arquivo styles.css é gerado com o tailwind

### Instale o tailwind.
```node
  npm install
```

#### Atualize o tailwind:
```node
  npm install tailwindcss@latest
```

#### Para utilizar o tailwind em desenvolvimento:
```node
  npx tailwindcss -i './src/global.css' -o './src/styles.css' --watch
```

#### Para gerar a build final do tailwind no styles.css utilize:
```node
  npx tailwindcss -i './src/global.css' -o './src/styles.css' --minify
```