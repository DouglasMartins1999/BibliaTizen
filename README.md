# Bíblia Sagrada para Samsung Galaxy Watch

Aplicativo da bíblia sagrada em Português, desenvolvido para o sistema wearable Tizen OS, compatível com a versão 5.5 ou superior. Dispõe tanto do Antigo Testamento quanto do Novo Testamento. Permite escolher entre as versões **NVI (Nova Versão Internacional)**, **ACF (Almeida Corrigida e Fiel)** e **AA (Almeida Revisada Imprensa Bíblica)** - disponibilizadas graças ao projeto de [thiagobodruk](https://github.com/thiagobodruk/biblia). Aplicativo em versão Beta, portanto, ainda não disponível na Galaxy Store. Mas você pode instalar-lo se dispor das ferramentas de desenvolvimento Tizen:



1. [Baixe e Configure o PATH](https://developer.tizen.org/development/tizen-studio/web-tools/cli) para o Tizen CLI, disponível no Tizen Studio

2. Habilite as Opções de Desenvolvimento em seu relógio (Google pelo procedimento relativo ao seu modelo)

3. Conecte seu dispositivo usando o Device Manager, incluso no Tizen Studio

4. Baixe o arquivo .wgt disponível nas Releases

5. Instale o applicativo usando o comando:

    `tizen install -n [nome do arquivo .wgt] -t [nome do relógio no Device Manager] -- [localização do arquivo]`



### Screenshots
<img src="https://github.com/DouglasMartins1999/BibliaTizen/blob/main/img/photo_2022-04-24_13-43-11.jpg?raw=true" style="max-width:160px" />
<img src="https://github.com/DouglasMartins1999/BibliaTizen/blob/main/img/photo_2022-04-24_13-43-14.jpg?raw=true" style="max-width:160px" />
<img src="https://github.com/DouglasMartins1999/BibliaTizen/blob/main/img/photo_2022-04-24_13-43-16.jpg?raw=true" style="max-width:160px" />
<img src="https://github.com/DouglasMartins1999/BibliaTizen/blob/main/img/photo_2022-04-24_13-43-19.jpg?raw=true" style="max-width:160px" />
<img src="https://github.com/DouglasMartins1999/BibliaTizen/blob/main/img/photo_2022-04-24_13-43-21.jpg?raw=true" style="max-width:160px" />



### Etapas Futuras

- [ ] Refatorar e separar o código da visualização
- [ ] Incluir um histórico de capítulos visitados
- [ ] Adicionar novas versões (NTLH e ARA)
- [ ] Disponibilizar em Outros Idiomas
- [ ] Adicionar a Galaxy Store
