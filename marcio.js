<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Streaming TV</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: white;
        }

        header {
            background-color: #000;
            padding: 20px;
            text-align: center;
        }

        .video-container {
            width: 100%;
            max-width: 1200px;
            margin: 20px auto;
        }

        #main-video {
            width: 100%;
            height: 600px;
            background-color: #000;
        }

        .nav-menu {
            background-color: #333;
            padding: 10px;
            text-align: center;
        }

        .nav-button {
            background-color: #444;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 10px;
            cursor: pointer;
            border-radius: 5px;
        }

        .nav-button:hover {
            background-color: #666;
        }

        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .content-item {
            background-color: #333;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s;
        }

        .content-item:hover {
            transform: scale(1.05);
        }

        .content-thumbnail {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .content-info {
            padding: 10px;
        }

        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <h1>Streaming TV</h1>
    </header>

    <div class="video-container">
        <video id="main-video" controls>
            <source src="video-default.mp4" type="video/mp4">
            Seu navegador não suporta o elemento de vídeo.
        </video>
    </div>

    <nav class="nav-menu">
        <button class="nav-button" data-content="movies">Filmes</button>
        <button class="nav-button" data-content="series">Séries</button>
        <button class="nav-button" data-content="live">Canais Ao Vivo</button>
    </nav>

    <div id="movies" class="content-grid">
        <div class="content-item" data-video="filme1.mp4">
            <img src="thumb1.jpg" class="content-thumbnail">
            <div class="content-info">
                <h3>Filme 1</h3>
                <p>Descrição do filme 1</p>
            </div>
        </div>
        <!-- Adicione mais filmes aqui -->
    </div>

    <div id="series" class="content-grid hidden">
        <div class="content-item" data-video="serie1.mp4">
            <img src="serie1.jpg" class="content-thumbnail">
            <div class="content-info">
                <h3>Série 1</h3>
                <p>Descrição da série 1</p>
            </div>
        </div>
        <!-- Adicione mais séries aqui -->
    </div>

    <div id="live" class="content-grid hidden">
        <div class="content-item" data-video="stream1.m3u8">
            <img src="canal1.jpg" class="content-thumbnail">
            <div class="content-info">
                <h3>Canal 1</h3>
                <p>Descrição do canal 1</p>
            </div>
        </div>
        <!-- Adicione mais canais aqui -->
    </div>

    <script>
        // Trocar conteúdo exibido
        document.querySelectorAll('.nav-button').forEach(button => {
            button.addEventListener('click', () => {
                const contentId = button.dataset.content;
                document.querySelectorAll('.content-grid').forEach(grid => {
                    grid.classList.add('hidden');
                });