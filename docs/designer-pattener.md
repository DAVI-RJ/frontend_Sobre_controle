# 🏛️ Arquitetura e Padrões de Projeto

Este projeto evoluiu sua estrutura conforme a necessidade de escalabilidade aumentou. Abaixo detalhamos os padrões adotados:

### 1. Atomic Design
Inicialmente, adotei o **Atomic Design** para organizar a biblioteca de componentes. A motivação principal foi evitar a repetição de código e garantir a consistência visual.

*   **Conceito:** Dividimos a interface em átomos, moléculas e organismos. 
*   **Benefício:** Componentização granular onde pequenos componentes reutilizáveis compõem estruturas mais complexas, facilitando a manutenção da UI.
*   **Referência:** Baseado nos conceitos de [boas-praticas-react](https://github.com/FlaviaBertoni/boas-praticas-react/tree/main/docs/09.%20Atomic%20Design).

### 2. Feature-Based Architecture (Estrutura por Funcionalidades)
Conforme as regras de negócio cresceram, a organização puramente atômica tornou-se difícil de navegar. Inspirado pelo repositório [bulletproof-react](https://github.com), apliquei uma separação por **Features**.

*   **O Problema:** O aumento de arquivos e dependências dificultava a localização de lógica de negócio específica.
*   **A Solução:** Cada funcionalidade (ex: `Auth`, `Profile`, `Customer`, `Supplier`) possui sua própria pasta contendo seus próprios componentes, hooks, tipos e testes.
*   **Vantagens:** 
    - **Manutenção Clara:** O impacto de uma alteração fica isolado na feature.
    - **Localização:** Facilidade para encontrar onde uma regra de negócio está implementada.
    - **Escalabilidade:** Permite que o projeto cresça sem tornar a pasta raiz caótica.
