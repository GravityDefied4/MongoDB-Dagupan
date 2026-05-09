const fetchBtn =
  document.getElementById("fetchBtn");

const userContainer =
  document.getElementById("userContainer");

const loading =
  document.getElementById("loading");

fetchBtn.addEventListener("click", () => {
  userContainer.innerHTML = "";

  loading.textContent = "Loading users...";

  fetch(
    "https://jsonplaceholder.typicode.com/users"
  )
    .then((response) => response.json())

    .then((users) => {
      loading.textContent = "";

      users.forEach((user) => {
        const userCard =
          document.createElement("div");

        userCard.classList.add("user-card");

        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> ${user.website}</p>
        `;

        userContainer.appendChild(userCard);
      });
    })

    .catch((error) => {
      loading.textContent = "";

      userContainer.innerHTML =
        `<p>Error fetching data.</p>`;

      console.log(error);
    });
});