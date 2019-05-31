## iuri-ng-loading
---
Biblioteca construída para projetos Angular para apresentação de Loading.  

Utilize a tag:  
  
    <iuri-ng-loading></iuri-ng-loading>
  
**Importar módulo:**  
*IuriNgLoadingModule*

**Exemplo de importação:**
  
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        IuriNgLoadingModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export  class  AppModule { }
  
**Inputs:**  
image: [string] (caminho onde se localiza a imagem)  
size: [string] (tamanho do componente de progresso. Se utilizar '%' considera-se a altura da tela)  