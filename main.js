let arr1 = [1, 2, 3];
let arr2 = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList (array) {
    let n = "<ul>"
    const count = array.length;

    for (let i = 0; i < count; i++) {

        let m = array[i];

        if (Array.isArray(m)) {

            n += "<li><ul>";

                for (let k= 0; k < m.length; k++) {

                    n += `<li>${m[k]}</li>`;
                }

            n += "</li></ul>";

        } else {

            n += `<li>${m}</li>`;
        }
    }

    n += "</ul>";
    document.body.innerHTML = n;
}

generateList(arr1);
generateList(arr2);