
const apps = [
    { name: 'Photoshop', description: 'A raster graphics editor developed and published by Adobe.', status: 'Updated', icon: 'https://blogger.googleusercontent.com/img/a/AVvXsEihJ0alWiHzfqbm1U8DtCzazG1--BinnKCFTuOlBB-SUqzftQaBdYUuBUjyHKNFeb5-Bq9HKPVaroWh9HHTlSV_t75vw-NbWdzxsCI6yl-suMTDFPWLTup6d_rergsq5KJGTGkpUNzHYnDWYr-E1v_I4j5WbOD8VRW_P0L9tE3j8Jc2CCpTC8YXtEbB=w31-h31-p-k-no-nu' },
    { name: 'Illustrator', description: 'A vector graphics editor and design program developed by Adobe.', status: 'Update Available', icon: 'https://blogger.googleusercontent.com/img/a/AVvXsEihJ0alWiHzfqbm1U8DtCzazG1--BinnKCFTuOlBB-SUqzftQaBdYUuBUjyHKNFeb5-Bq9HKPVaroWh9HHTlSV_t75vw-NbWdzxsCI6yl-suMTDFPWLTup6d_rergsq5KJGTGkpUNzHYnDWYr-E1v_I4j5WbOD8VRW_P0L9tE3j8Jc2CCpTC8YXtEbB=w31-h31-p-k-no-nu' },
    { name: 'After Effects', description: 'A digital visual effects, motion graphics, and compositing application developed by Adobe.', status: 'Updated', icon: 'https://blogger.googleusercontent.com/img/a/AVvXsEihJ0alWiHzfqbm1U8DtCzazG1--BinnKCFTuOlBB-SUqzftQaBdYUuBUjyHKNFeb5-Bq9HKPVaroWh9HHTlSV_t75vw-NbWdzxsCI6yl-suMTDFPWLTup6d_rergsq5KJGTGkpUNzHYnDWYr-E1v_I4j5WbOD8VRW_P0L9tE3j8Jc2CCpTC8YXtEbB=w31-h31-p-k-no-nu' }
];

const appList = document.getElementById('appList');

apps.forEach(app => {
    const appItem = document.createElement('div');
    appItem.classList.add('app-item-new');

    const icon = document.createElement('img');
    icon.src = app.icon;

    const appInfo = document.createElement('div');
    appInfo.classList.add('app-info-new');

    const appName = document.createElement('div');
    appName.classList.add('app-name-new');
    const name = document.createElement('span');
    name.textContent = app.name;
    appName.appendChild(icon);
    appName.appendChild(name);

    const description = document.createElement('div');
    description.classList.add('app-description-new');
    description.textContent = app.description;

    appInfo.appendChild(appName);
    appInfo.appendChild(description);

    const status = document.createElement('div');
    status.classList.add('status-new');

    const dot = document.createElement('span');
    dot.classList.add('dot-new', app.status === 'Updated' ? 'updated-new' : 'update-available-new');

    const statusText = document.createElement('span');
    statusText.textContent = app.status;

    status.appendChild(dot);
    status.appendChild(statusText);

    if (app.status === 'Update Available') {
        const updateButton = document.createElement('button');
        updateButton.classList.add('update-button-new');
        updateButton.textContent = 'Update This App';
        status.appendChild(updateButton);
    } else {
        const openButton = document.createElement('button');
        openButton.classList.add('update-button-new');
        openButton.textContent = 'Open';
        openButton.disabled = true;
        status.appendChild(openButton);
    }

    appItem.appendChild(appInfo);
    appItem.appendChild(status);

    appList.appendChild(appItem);
});
