const createHomepageTemplate = () => `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Album Charts</title>
    <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.11/dist/htmx.js" integrity="sha384-gmJEF2eAKY4e+FDN+qtKIivWyb6ANwDB7JUdUybKgQspPKyEX/pIRZG/0uaRoW2C" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <header>
        <h1>Weekly Album Chart</h1>
    </header>

    <main>
        <div class="album-list">
            <!-- Album list later -->
        </div>
        <div class="add-album-form">
            <h2>Which album do you want to add?</h2>
            <!-- Form template here later -->
        </div>
    </main>
    
</body>
</html>
`;

export default createHomepageTemplate;