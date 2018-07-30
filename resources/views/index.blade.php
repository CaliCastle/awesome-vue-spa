@extends('layout.spa')

@section('title', '主页')

@push('head')
	<link rel="preload" href="{{ mix('/assets/css/app.css') }}" as="style">
	<link rel="preload" href="{{ mix('/assets/js/app.js') }}" as="script">

	<link rel="stylesheet" href="{{ mix('/assets/css/app.css') }}">
@endpush

@section('vue-root-id', 'app')

@push('body.scripts')
	<script src="{{ mix('/assets/js/app.js') }}"></script>
@endpush