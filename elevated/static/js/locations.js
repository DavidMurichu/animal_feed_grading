$(document).ready(function() {
    $("#Ward").change(function() {
        var selectedCategory = $(this).val();
        var subCategorySelect = $("#Location");

        subCategorySelect.empty().append('<option selected disabled>--Select Location--</option>');

        if (selectedCategory === "Wamagana") {
            subCategorySelect.append(`
                <option value="Karundu">Karundu</option>
                <option value="Thegenge">Thegenge</option>`);
        } else if (selectedCategory === "Aguthi-Gaaki") {
            subCategorySelect.append(`
                <option value="Aguthi">Aguthi</option>
                <option value="Gaaki">Gaaki</option>`);
        } else if (selectedCategory === "Dedan Kimanthi") {
            subCategorySelect.append(`
                <option value="Tetu">Tetu</option>
                <option value="Huhoini">Huhoini</option>
                <option value="Kimathi">Kimathi</option>
                <option value="Muhoya">Muhoya</option>`);
        }
    });

    $("#Location").change(function() {
        var selectedCategory = $(this).val();
        var subCategorySelect = $("#Sub-Location");

        subCategorySelect.empty().append('<option selected disabled>--Select Sub Location--</option>');

        if (selectedCategory === "Karundu") {
            subCategorySelect.append(`
                <option value="Kaiguri">Kaiguri</option>
                <option value="Kariguini">Kariguini</option>
                <option value="Kianjogu(Wamagana Giakanja Kagwathi)">Kianjogu(Wamagana Giakanja Kagwathi)</option>
                <option value="Kigwandi">Kigwandi</option>
                <option value="Kihora (Gachatha)">Kihora (Gachatha)</option>
                <option value="Mbaaini">Mbaaini</option>
                <option value="Unjiru (Kiandu)">Unjiru (Kiandu)</option>`);
        } else if (selectedCategory === "Thegenge") {
            subCategorySelect.append(`
                <option value="Gathuthi">Gathuthi</option>
                <option value="Hubuini">Hubuini</option>
                <option value="Ihithe">Ihithe</option>
                <option value="Karangia">Karangia</option>
                <option value="Kiamutiga">Kiamutiga</option>
                <option value="Mathakwa-ini">Mathakwa-ini</option>
                <option value="Ndugamano">Ndugamano</option>
                <option value="Wandumbi">Wandumbi</option>`);
        } else if (selectedCategory === "Tetu") {
            subCategorySelect.append(`
                <option value="Gatumbiro">Gatumbiro</option>
                <option value="Karaihu(Kiandere/Githakwa)">Karaihu(Kiandere/Githakwa)</option>
                <option value="Kigogoini">Kigogoini</option>`);
        }else if (selectedCategory === "Huhoini") {
            subCategorySelect.append(`
                <option value="Ichagachiru">Ichagachiru</option>
                <option value="Kirurumi/Gaithuri">Kirurumi/Gaithuri</option>`);
        }else if (selectedCategory === "Kimathi") {
            subCategorySelect.append(`
                <option value="Kanjora/Kahigaini">Kanjora/Kahigaini</option>
                <option value="Karunaini/Miagayuini">Karunaini/Miagayuini</option>
                <option value="Ngooru">Ngooru</option>`);
        }else if (selectedCategory === "Muhoya") {
            subCategorySelect.append(`
                <option value="Ihururu">Ihururu</option>
                <option value="Thatha/Njoguini">Thatha/Njoguini</option>`);
        }else if (selectedCategory === "Aguthi") {
            subCategorySelect.append(`
                <option value="Gichira">Gichira</option>
                <option value="Gititu">Gititu</option>
                <option value="Ithekahuno">Ithekahuno</option>
                <option value="Mungaria">Mungaria</option>
                <option value="Thageini">Thageini</option>`);
        }else if (selectedCategory === "Gaaki") {
            subCategorySelect.append(`
                <option value="Gaaki(Kangaita)">Gaaki(Kangaita)</option>
                <option value="Gathaithi">Gathaithi</option>
                <option value="Huhoini">Huhoini</option>
                <option value="Kiawaithanji">Kiawaithanji</option>
                <option value="Mutathini">Mutathini</option>`);
        }

        
    });
});


function lettersOnlyAndSpaces(input) {
    var regex = /[^a-z ]/gi;
    input.value = input.value.replace(regex, "")

}

function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "")
}

function numbersOnly(input) {
    var regex = /[^0-9]/gi;
    input.value = input.value.replace(regex, "")
}