const select = document.getElementById('sortiraj-select');
let tbody = document.querySelector('tbody');

select.addEventListener('change', () => {
  let vrstaSorta = select.options[select.selectedIndex].value;

  $.ajax({
    url: 'sortiraj.php',
    type: 'POST',
    data: {
      vrstaSorta,
    },
    success: (response) => {
      let records = JSON.parse(response);
      tbody.innerHTML = "";
      records.forEach((record, index) => {
        tbody.innerHTML += `      
          <tr>
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>${record.mobile}</td>
            <td>${record.address}</td>
            <td>
              <a href="read.php?id=${record.id}" class="badge badge-info">Read</a>
              <a href="delete.php?id=${record.id}" class="badge badge-danger">Delete</a>
              <a href="edit.php?id=${record.id}" class="badge badge-success">Edit</a>
            </td>
          </tr>`;
      });

    }
  });
});

