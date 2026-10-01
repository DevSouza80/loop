# 🍹 Menu Interativo: Estruturas de Repetição e Condição em JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge)

Projeto de estudo que demonstra, de forma prática, o uso das estruturas **`while`**, **`for`** e **`switch`** em JavaScript, aplicadas a um pequeno menu de pedidos em uma página HTML.

---

## 📌 Sobre o projeto

O projeto apresenta uma lista de opções (suco, água gelada, sorvete e chamar o garçom). Ao clicar no botão **Pedir**, o usuário digita um número de 1 a 4 e recebe um alerta com a opção escolhida.

Além do menu, o script também exibe na página a saída de dois laços de repetição (`while` e `for`), servindo como exemplo didático de cada estrutura.

## ✨ Funcionalidades

- Menu de opções renderizado em HTML
- Captura da escolha do usuário via `prompt()`
- Resposta personalizada para cada opção usando `switch`
- Tratamento de valores inválidos com `default`
- Exemplos de laços `while` e `for` com saída na tela (`document.write`) e no console (`console.log`)

## 🧠 Conceitos praticados

| Conceito | Onde é usado |
|----------|--------------|
| `while` | Imprime os valores de `x` de 10 a 29 |
| `for` | Imprime os valores de `a` de 0 a 29 |
| `switch / case / default` | Trata a opção escolhida no menu |
| Funções | `pedir()` é chamada pelo botão |
| Eventos | `onclick` no botão "Pedir" |
| Conversão de tipos | `Number()` converte o texto do `prompt` em número |
| Interação com o usuário | `prompt()` e `alert()` |

## 🗂️ Estrutura de arquivos

```
📦 projeto
 ┣ 📜 index.html
 ┣ 📜 script.js
 ┗ 📜 README.md
```

## 🚀 Como executar

Não é necessário instalar nada.

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Abra o arquivo `index.html` no navegador (clique duas vezes ou use a extensão *Live Server* do VS Code).
4. Clique em **Pedir**, digite um número de 1 a 4 e veja o resultado.

## 🖥️ Exemplo de uso

| Entrada | Resultado |
|---------|-----------|
| `1` | Você escolheu 1 = Suco |
| `2` | Você escolheu 2 = Agua gelada |
| `3` | Você escolheu 3 = Sorvete |
| `4` | Você chamou o garçom! |
| Qualquer outro valor | Escolha uma opção entre 1 a 4 |

## 🔧 Possíveis melhorias

- [ ] Substituir `prompt()` e `alert()` por campos e mensagens na própria página
- [ ] Evitar `document.write()` e usar manipulação do DOM (`innerHTML` / `textContent`)
- [ ] Trocar `var` por `let` e `const`
- [ ] Adicionar estilização com CSS
- [ ] Criar um botão para cada item do menu

## 📚 Aprendizados

Este projeto faz parte da minha jornada de estudos em lógica de programação e desenvolvimento web, com foco em fixar o funcionamento das estruturas de controle de fluxo em JavaScript.

## 👤 Autor

**Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu-linkedin](https://www.linkedin.com/in/seu-linkedin)

---

⭐ Se este projeto te ajudou de alguma forma, deixe uma estrela no repositório!
