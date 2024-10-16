        function calculateYesAnswers() {
            let yesCount = 0;
            let threatCount = 0;
            let challengeQuestions = ["q1",
                "q4",
                "q5",
                "q8",
                "q11",
                "q13",
                "q14",
                "q15",
                "q16",
                "q20"];
            

            // Check all questions for "Yes" answers
            for (let i = 1; i <= 20; i++) {
                let question = document.querySelector(`input[name="q${i}"]:checked`);
                
                if (question && challengeQuestions.includes(question.name) && question.value === "yes") {
                    yesCount++;
                }
                else if 
                    (question && challengeQuestions.includes(question.name) ===false&& question.value === "yes") {
                        threatCount++;
                    
                }

            }

        
            // Display the result
            document.getElementById("result").innerText = `Your challenge score is ${yesCount}!`;
            document.getElementById("result2").innerText = `Your threat score is ${threatCount}!`;
        }
