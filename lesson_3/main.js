const form = document.querySelector('form'),
    fileinput = form.querySelector('.file-input'),
    progressArea = form.querySelector('.progress-area'),
    uploaddedArea = form.querySelector('.uploadded-area');
form.addEventListener('click', function () {
    fileinput.click();
});

fileinput.onchange = ({ target }) => {
    let file = target.files[0];
    if (file) {
        let filename = file.name;
        if (filename.length >= 12) {
            let splitname = filename.split('.');
            filename = splitname[0].substring(0, 12) + "..." + splitname[1];
        }
        uploadFile(filename);
    }
};
function uploadFile(name) {
    let xhr = new XMLHttpRequest();
    // xhr.open('POST', 'php/upload.php');
    xhr.upload.addEventListener("progress", ({ loaded, total }) => {
        let fileloaded = Math.floor((loaded / total) * 100);
        let filetotal = Math.floor(total / 1000);
        let filesize;
        (filetotal < 1024) ? filesize = filetotal + 'KB' : filesize = (loaded / (1024 * 1024)).toFixed(2) + "MB";
        let progressHTML = `<li class="Row">
        <i><i class="fa-duotone fa-files"></i></i>
        <div class="content">
            <div class="details">
                <span class="name">${name}</span>
                <span class="pergcent">${fileloaded}%</span>
            </div>
            <div class="progress-bar">
                <div class="progreSS" style="width:${fileloaded}%"></div>
            </div>
        </div>
        </li>`;

        uploaddedArea.classList.add('onprogress');
        // uploaddedArea.innerHTML = "";
        progressArea.innerHTML = progressHTML;
        if (loaded == total) {
            progressArea.innerHTML = "";
            let uploadeHTML = `<li class="Row">
            <div class="content">
                <i><i class="fa-duotone fa-files"></i></i>
                <div class="details">
                    <span class="name">${name}</span>
                    <span class="size">${filesize}</span>
                </div>

            </div>
            <i><i class="fa-regular fa-check"></i></i>
        </li>`;
            uploaddedArea.classList.add('onprogress');
            uploaddedArea.insertAdjacentHTML("afterbegin", uploadeHTML)
            // uploaddedArea.innerHTML = uploadeHTML;
        }
    });
    let formdata = new FormData(form);
    // xhr.send(formdata);
}