<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="quiz.aspx.cs" Inherits="Spark_Events.Pages.quiz" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="../Stylesheet/quizstyle.css" rel="stylesheet" />
    <title>Quiz Page</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>

    <header>
        <h1>Interactive Quiz</h1>
    </header>

    <main>
        <section id="quiz-container">
            <div id="question-container">
                <h2 id="question">Question will come here</h2>
                <ul id="options-list">
                  
                </ul>
                <button id="next-btn" >Next Question</button>
            </div>
            <div id="timer">
                Time Left: <span id="time-left"></span>seconds
            </div>

        </section>

    </main>

    <footer>
        <p>Quiz Page &copy; 2024</p>
    </footer>

    <script src="../JS/JavaScript.js"></script>
</body>
</html>
