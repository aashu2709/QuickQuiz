<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="result.aspx.cs" Inherits="Spark_Events.Pages.result" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Result Page</title>
    <%--<link href="../Stylesheet/Style.css" rel="stylesheet" />--%>
    <link href="../Stylesheet/resultStyle.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>

    <header>
        <h1>Your Quiz Results</h1>
    </header>

    <main>
        <section id="results-container">
            <h3>Your Score: <span id="score"></span></h3>
            <button id="retake" onclick="window.location.href='quiz.aspx';">Retake Quiz</button>
                  <button id="leaderboard" onclick="window.location.href='Leaderboard.aspx';">View Leaderboard</button>
        </section>
         <section id="save-score-container">
        <h4>Save Your Score</h4>
        <input type="text" id="username" placeholder="Enter your name" />
        <button id="save-score-btn">Save Score</button>
      </section>

    </main>


    <footer>
        <p>Results Page &copy; 2024</p>
    </footer>
    <script src="../JS/JavaScript.js"></script>
</body>
</html>
