CREATE TABLE `pb_questions` (
  `QID` int NOT NULL,
  `QUESTION_DESC` varchar(200) NOT NULL,
  /*`QUESTION_TYPE` varchar(50) NOT NULL,*/
  `STRONGLY_DISAGREE` int NOT NULL,
  `DISAGREE` int NOT NULL,
  `NEUTRAL` int NOT NULL,
  `AGREE` int NOT NULL,
  `STRONGLY_AGREE` int NOT NULL,
  PRIMARY KEY (`QID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
