@extends('layout.spa')

@section('title', config('app.backend_name') . ' | ' . config('app.name'))

@push('head')
	<link rel="preload" href="{{ mix('/assets/css/admin/app.css') }}" as="style">
	<link rel="preload" href="{{ mix('/assets/js/admin/app.js') }}" as="script">

	<link rel="stylesheet" href="{{ mix('/assets/css/admin/app.css') }}">
@endpush

@section('vue-root-id', 'admin-app')

@push('body.scripts')
	<script src="{{ mix('/assets/js/admin/app.js') }}"></script>
@endpush