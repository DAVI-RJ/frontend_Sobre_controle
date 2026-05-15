# 🏛️ Arquitetura e Padrões de Projeto

Este projeto evoluiu sua estrutura conforme a necessidade de escalabilidade aumentou.

### 1. Atomic Design

Inicialmente, adotei o **Atomic Design** para organizar a biblioteca de componentes. A motivação
principal foi evitar a repetição de código e garantir a consistência visual.

- **Conceito:** Dividi a interface em átomos, moléculas, organismos e templetes.
- **Benefício:** Componentização granular onde pequenos componentes reutilizáveis compõem estruturas
  mais complexas, facilitando a manutenção da UI.
- **Referência:** Baseado nos conceitos de
  [boas-praticas-react](https://github.com/FlaviaBertoni/boas-praticas-react/tree/main/docs/09.%20Atomic%20Design).

### 2. Feature-Based Architecture (Estrutura por Funcionalidades)

Conforme as regras de negócio cresceram, a organização puramente atômica tornou-se difícil de
navegar.

Inspirado pelo repositório [bulletproof-react](https://github.com), apliquei uma separação por
**Features**.

- **O Problema:** O aumento de arquivos e dependências dificultava a localização de lógica de
  negócio específica.
- **A Solução:** Cada funcionalidade (ex: `Product`, `Company`, `Customer`, `Supplier`) possui sua
  própria pasta contendo seus próprios componentes, hooks, services.
- **Vantagens:**
  - **Manutenção Clara:** O impacto de uma alteração fica isolado na feature.
  - **Localização:** Facilidade para encontrar onde uma regra de negócio está implementada.
  - **Escalabilidade:** Permite que o projeto cresça sem tornar a pasta raiz caótica.

### 3. Eslint + Prettir

- **Eslint**:

Para manter a concistência do código usei essa ferramenta valiosa de análise estática de código
JavaScript, auxiliando no desenvolvimento mais produtivo, poís ele ficou responsavél da manutenção
da qualidade do código e na adesão aos padrões de codificação, de modo à identificar e prevenir
erros comuns, garantindo a correção do código.

- configuração de regras no `.eslint.config.js`:

```
rules: {
     "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
     "no-console": "warn",
     "prefer-const": "warn",
     "react-hooks/rules-of-hooks": "error",
     "react-hooks/exhaustive-deps": "warn",
     "import/no-default-export": "error",
     "import/prefer-default-export": "off",
   },

```

- **Prettir**:

Mantive a formatação de código consistente em todo o projeto. Ao habilitar o recurso "formatar ao
salvar" na minha IDE, o código é formatado automaticamente de acordo com as regras definidas nas
configuração.

- Veja o arquivo `.prettierrc`:

```
{
 "arrowParens": "always",
 "bracketSpacing": true,
 "jsBracketSameLine": false,
 "jsxSingleQuote": false,
 "printWidth": 100,
 "proseWrap": "always",
 "tabWidth": 2,
 "semi": true,
 "trailingComma": "es5",
 "useTabs": false,
 "endOfLine": "auto"
}

```

### 4. Imports

Importações absolutas para evitar caminhos complexo

- Veja o `jsconfig.json`:

```
{
  "compilerOptions": {
    "ignoreDeprecations": "6.0",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules"]
}

```
