const fileInput = document.getElementById('fHinh');
  const browseBtn = document.getElementById('btnBrowse');
  const fileName = document.getElementById('txtHinh');
  const cityInput = document.getElementById('txtThanhPho');
  const cityDatalist = document.getElementById('dlThanhPho');
  const languageCheckbox = document.getElementById('chkOther');
  const languageInput = document.getElementById('txtLanguage');

  browseBtn.addEventListener('click', function() {
    fileInput.click();
  });

  fileInput.addEventListener('change', function() {
    fileName.value = this.files[0].name;
  });

  cityInput.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    const options = cityDatalist.querySelectorAll('option');

    options.forEach(function(option) {
      const optionValue = option.value.toLowerCase();
      if (optionValue.includes(inputValue)) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  });

  languageCheckbox.addEventListener('change', function() {
    if (this.checked) {
      languageInput.style.display = 'block';
    } else {
      languageInput.style.display = 'none';
    }
  });