@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <h1>Notícias</h1>
            <link-button-component rota="localhost" classe="btn btn-outline-primary mt-3 mb-3"
                                   titulo="Cadastrar Notícias"></link-button-component>
            <link-button-component rota="localhost" classe="btn btn-outline-secondary mt-3 mb-3"
                                   titulo="Cadastrar Categoria"></link-button-component>
            <noticias-component></noticias-component>
        </div>
    </div>
@endsection()
