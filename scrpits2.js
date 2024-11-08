body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.form-section {
    width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.form-section h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #4047F0;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    color: #333;
}

.input-group i {
    margin-right: 10px;
}

.input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4047F0;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #3b3fde;
}

.id-card-section {
    width: 250px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.id-card {
    text-align: center;
}

.id-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(to top, #4047F0, #8f94fb);
    margin: 0 auto 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.id-photo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.id-card h3, .id-card p {
    margin: 5px 0;
    color: #333;
}

#displayName {
    color: #4047F0;
}
