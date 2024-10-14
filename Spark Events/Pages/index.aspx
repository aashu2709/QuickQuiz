<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Spark_Events.Pages.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>QuizQuest</title>
    <link href="../Stylesheet/Style.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">

        <div>
        </div>
    </form>

    <%-- Header of the Page --%>
    <header>
        <h1>Welcome to the Quiz </h1>
        <nav>

            <a href="index.aspx">Home</a>
            <a href="quiz.aspx">Start Quiz</a>
            <a href="leaderboard.aspx">Leaderboard</a>
            <a href="About.aspx">About</a>
        </nav>
    </header>

    <%-- Main section --%>
    <main>

        <section class="home-content">

            <h2>Test Your Knowledge!</h2>

            <button id="btn" onclick="window.location.href='quiz.aspx';">Start Quiz</button>

        </section>
    </main>

    <%-- Footer of the page --%>
    <footer>
        <p>Interactive Quiz Website &copy; 2024</p>
    </footer>

    <script src="../JS/JavaScript.js"></script>

</body>
</html>
