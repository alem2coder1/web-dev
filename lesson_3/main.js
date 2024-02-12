

const form = $('form');
const fileInput = $('.file-input');
const progressArea = $('.progress-area');
const uploadedArea = $('.uploaded-area');


form.on('click', () => {
    fileInput.click();
});

fileInput.on('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        uploadFile(file);
    }
});

function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    $.ajax({
        url: '/Home/UploadFile',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        xhr: function() {
            const xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener('progress', function(event) {
                if (event.lengthComputable) {
                    const percent = Math.round((event.loaded / event.total) * 100);
                    updateProgress(percent);
                }
            }, false);
            return xhr;
        },
        success: function(response) {
            displayUploadedFile(response.name, response.size);
        },
        error: function() {
            console.error('Error uploading file');
        }
    });
}

function updateProgress(percent) {
    progressArea.html(`
         <li class="Row">
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
</li>
    `);
}

function displayUploadedFile(name, size) {
    const uploadedHTML = `
        <li class="row">
            <div class="content">
                <i class="fa-duotone fa-files"></i>
                <div class="details">
                    <span class="name">${name}</span>
                    <span class="size">${formatFileSize(size)}</span>
                </div>
            </div>
            <i class="fa-regular fa-check"></i>
        </li>
    `;
    uploadedArea.prepend(uploadedHTML);
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// let progressHTML = `<li class="Row">
//         <i><i class="fa-duotone fa-files"></i></i>
//         <div class="content">
//             <div class="details">
//                 <span class="name">${name}</span>
//                 <span class="pergcent">${fileloaded}%</span>
//             </div>
//             <div class="progress-bar">
//                 <div class="progreSS" style="width:${fileloaded}%"></div>
//             </div>
//         </div>
//         </li>`;
// let uploadeHTML = `<li class="Row">
//             <div class="content">
//                 <i><i class="fa-duotone fa-files"></i></i>
//                 <div class="details">
//                     <span class="name">${name}</span>
//                     <span class="size">${filesize}</span>
//                 </div>
//             </div>
//             <i><i class="fa-regular fa-check"></i></i>
//             </li>`;