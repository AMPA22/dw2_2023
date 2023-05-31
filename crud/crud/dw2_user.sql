
CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `apellido` varchar(191) NOT NULL,
  `cin` varchar(191) NOT NULL,
  `direccion` text DEFAULT NULL,
  `fecha_nac` date NOT NULL,
  `ciudad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);
