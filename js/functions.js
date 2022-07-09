const getNextFigure = () => {
    figures[imagesDisplayIndex].classList.remove('active');
    thumbnails[imagesDisplayIndex].classList.remove('active');
    imagesDisplayIndex++;
    if (imagesDisplayIndex >= figures.length) imagesDisplayIndex = 0;
    figures[imagesDisplayIndex].classList.add('active');
    thumbnails[imagesDisplayIndex].classList.add('active');
};

// ! |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const getPrevFigure = () => {
    figures[imagesDisplayIndex].classList.remove('active');
    thumbnails[imagesDisplayIndex].classList.remove('active');
    imagesDisplayIndex--;
    if (imagesDisplayIndex < 0) imagesDisplayIndex = figures.length - 1;
    figures[imagesDisplayIndex].classList.add('active');
    thumbnails[imagesDisplayIndex].classList.add('active');
};