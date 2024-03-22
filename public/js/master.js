const navPage = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container" style="max-width: 540px;">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="setup.html">Setup</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="interact.html">Store</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="reward.html">Reward 1</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `

const divNavPage = document.getElementById("divNavPage")
if (divNavPage) {
    var child = document.createElement('div');
    child.innerHTML = navPage.toString();
    divNavPage.appendChild(child);
}