/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    background-color: #E8F1F2; /* Light soothing blue */
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #A8DADC; /* Soft greenish-blue */
    color: #1D3557; /* Dark soothing blue */
    text-align: center;
    padding: 20px 0;
}

h1 {
    margin: 0;
    font-size: 2.5rem;
}

main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

#quiz-container {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #1D3557; /* Dark blue */
}

#options {
    display: flex;
    flex-direction: column;
}

label {
    margin: 10px 0;
    font-size: 1.2rem;
    cursor: pointer;
    color: #457B9D; /* Calming blue */
}

input[type="radio"] {
    margin-right: 10px;
}

.btn {
    background-color: #A8DADC; /* Soft greenish-blue */
    color: #1D3557; /* Dark soothing blue */
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    margin: 5px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #457B9D; /* Slightly darker for hover effect */
}

#result-container {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

footer {
    background-color: #A8DADC;
    color: #1D3557;
    text-align: center;
    padding: 10px 0;
}

footer p {
    margin: 0;
}
