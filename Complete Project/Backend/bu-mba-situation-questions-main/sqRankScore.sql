CREATE TABLE `sqRankScore` (
  `BingNumber` varchar(10) NOT NULL,
  `RankSR1` int DEFAULT NULL,
  `RankSR2` int DEFAULT NULL,
  `RankSR3` int DEFAULT NULL,
  `RankSR4` int DEFAULT NULL,
  `RankSR5` int DEFAULT NULL,
  `RankSR6` int DEFAULT NULL,
  `RankSR7` int DEFAULT NULL,
  `RankSR8` int DEFAULT NULL,
  `RankSR9` int DEFAULT NULL,
  `RankSR10` int DEFAULT NULL,
  `RankSR11` int DEFAULT NULL,
  `RankSR12` int DEFAULT NULL,
  `RankSR13` int DEFAULT NULL,
  `RankSR14` int DEFAULT NULL,
  `RankSR15` int DEFAULT NULL,
  `RankSR16` int DEFAULT NULL,
  `RankSR17` int DEFAULT NULL,
  `RankSR18` int DEFAULT NULL,
  `RankSR19` int DEFAULT NULL,
  `RankSR20` int DEFAULT NULL,
  `RankSR21` int DEFAULT NULL,
  `RankSR22` int DEFAULT NULL,
  `RankSR23` int DEFAULT NULL,
  `RankSR24` int DEFAULT NULL,
  `RankSR25` int DEFAULT NULL,
  `RankSR26` int DEFAULT NULL,
  `RankSR27` int DEFAULT NULL,
  `RankSR28` int DEFAULT NULL,
  `RankSR29` int DEFAULT NULL,
  `RankSR30` int DEFAULT NULL,
  `RankSR31` int DEFAULT NULL,
  `RankSR32` int DEFAULT NULL,
  `RankSR33` int DEFAULT NULL,
  `RankSR34` int DEFAULT NULL,
  `RankSR35` int DEFAULT NULL,
  `RankSR36` int DEFAULT NULL,
  `RankSR37` int DEFAULT NULL,
  `RankSR38` int DEFAULT NULL,
  `RankSR39` int DEFAULT NULL,
  `RankSR40` int DEFAULT NULL,
  `RankSR41` int DEFAULT NULL,
  `RankSR42` int DEFAULT NULL,
  `RankSR43` int DEFAULT NULL,
  `RankSR44` int DEFAULT NULL,
  `RankSR45` int DEFAULT NULL,
  `RankSR46` int DEFAULT NULL,
  `RankSR47` int DEFAULT NULL,
  `RankSR48` int DEFAULT NULL,
  `RankSR49` int DEFAULT NULL,
  `RankSR50` int DEFAULT NULL,
  `RankSR51` int DEFAULT NULL,
  `RankSR52` int DEFAULT NULL,
  `RankSR53` int DEFAULT NULL,
  `RankSR54` int DEFAULT NULL,
  `RankSR55` int DEFAULT NULL,
  `RankSR56` int DEFAULT NULL,
  `RankDIFF1` int DEFAULT NULL,
  `RankDIFF2` int DEFAULT NULL,
  `RankDIFF3` int DEFAULT NULL,
  `RankDIFF4` int DEFAULT NULL,
  `RankDIFF5` int DEFAULT NULL,
  `RankDIFF6` int DEFAULT NULL,
  `RankDIFF7` int DEFAULT NULL,
  `RankDIFF8` int DEFAULT NULL,
  `RankDIFF9` int DEFAULT NULL,
  `RankDIFF10` int DEFAULT NULL,
  `RankDIFF11` int DEFAULT NULL,
  `RankDIFF12` int DEFAULT NULL,
  `RankDIFF13` int DEFAULT NULL,
  `RankDIFF14` int DEFAULT NULL,
  `RankDIFF15` int DEFAULT NULL,
  `RankDIFF16` int DEFAULT NULL,
  `RankDIFF17` int DEFAULT NULL,
  `RankDIFF18` int DEFAULT NULL,
  `RankDIFF19` int DEFAULT NULL,
  `RankDIFF20` int DEFAULT NULL,
  `RankDIFF21` int DEFAULT NULL,
  `RankDIFF22` int DEFAULT NULL,
  `RankDIFF23` int DEFAULT NULL,
  `RankDIFF24` int DEFAULT NULL,
  `RankDIFF25` int DEFAULT NULL,
  `RankDIFF26` int DEFAULT NULL,
  `RankDIFF27` int DEFAULT NULL,
  `RankDIFF28` int DEFAULT NULL,
  `RankDIFF29` int DEFAULT NULL,
  `RankDIFF30` int DEFAULT NULL,
  `RankDIFF31` int DEFAULT NULL,
  `RankDIFF32` int DEFAULT NULL,
  `RankDIFF33` int DEFAULT NULL,
  `RankDIFF34` int DEFAULT NULL,
  `RankDIFF35` int DEFAULT NULL,
  `RankDIFF36` int DEFAULT NULL,
  `RankDIFF37` int DEFAULT NULL,
  `RankDIFF38` int DEFAULT NULL,
  `RankDIFF39` int DEFAULT NULL,
  `RankDIFF40` int DEFAULT NULL,
  `RankDIFF41` int DEFAULT NULL,
  `RankDIFF42` int DEFAULT NULL,
  `RankDIFF43` int DEFAULT NULL,
  `RankDIFF44` int DEFAULT NULL,
  `RankDIFF45` int DEFAULT NULL,
  `RankDIFF46` int DEFAULT NULL,
  `RankDIFF47` int DEFAULT NULL,
  `RankDIFF48` int DEFAULT NULL,
  `RankDIFF49` int DEFAULT NULL,
  `RankDIFF50` int DEFAULT NULL,
  `RankDIFF51` int DEFAULT NULL,
  `RankDIFF52` int DEFAULT NULL,
  `RankDIFF53` int DEFAULT NULL,
  `RankDIFF54` int DEFAULT NULL,
  `RankDIFF55` int DEFAULT NULL,
  `RankDIFF56` int DEFAULT NULL,
  `RankParticipantScoreS1` int DEFAULT NULL,
  `RankDiscrepancyScoreS1` int DEFAULT NULL,
  `RankParticipantScoreS2` int DEFAULT NULL,
  `RankDiscrepancyScoreS2` int DEFAULT NULL,
  `RankParticipantScoreS3` int DEFAULT NULL,
  `RankDiscrepancyScoreS3` int DEFAULT NULL,
  `RankParticipantScoreS4` int DEFAULT NULL,
  `RankDiscrepancyScoreS4` int DEFAULT NULL,
  `RankParticipantScoreS5` int DEFAULT NULL,
  `RankDiscrepancyScoreS5` int DEFAULT NULL,
  `RankParticipantScoreS6` int DEFAULT NULL,
  `RankDiscrepancyScoreS6` int DEFAULT NULL,
  `RankParticipantScoreS7` int DEFAULT NULL,
  `RankDiscrepancyScoreS7` int DEFAULT NULL,
  `RankParticipantScoreS8` int DEFAULT NULL,
  `RankDiscrepancyScoreS8` int DEFAULT NULL,
  `RankParticipantScoreS9` int DEFAULT NULL,
  `RankDiscrepancyScoreS9` int DEFAULT NULL,
  `RankParticipantScoreS10` int DEFAULT NULL,
  `RankDiscrepancyScoreS10` int DEFAULT NULL,
  `RankParticipantScoreS11` int DEFAULT NULL,
  `RankDiscrepancyScoreS11` int DEFAULT NULL,
  `Avg5itemRankScore` double DEFAULT NULL,
  `Avg6itemRankScore` double DEFAULT NULL,
  `Avg4itemRankScore` int DEFAULT NULL,
  `RankDecisionScore` double DEFAULT NULL,
  `ConvertedRankDecisionsScore` int DEFAULT NULL,
  PRIMARY KEY (`BingNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci