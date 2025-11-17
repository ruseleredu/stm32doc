import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

//import useBaseUrl from "@docusaurus/useBaseUrl";
import GitHubImage from "/img/github-mark.png"; // Use @site alias for src folder
import VSCodeImage from "/img/vscode.png";
import STM32Image from "/img/STM32.png";
import PIOimage from "/img/platformio.png";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  image?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "GitHub Repository",
    // Svg: require("@site/static/img/github-mark.svg").default,
    image: GitHubImage, // Use the imported image variable here
    description: (
      <>
        O{" "}
        <a href="https://github.com/" target="_blank">
          GitHub
        </a>{" "}
        é uma plataforma de desenvolvimento de software baseada em nuvem, criada
        para hospedar e gerenciar projetos de código usando o sistema de
        controle de versão
        <a
          href="https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/"
          target="_blank"
        >
          {" "}
          Git
        </a>
        .
      </>
    ),
  },
  {
    title: "Visual Studio Code",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    image: VSCodeImage, // Use the imported image variable here
    description: (
      <>
        <a href="https://code.visualstudio.com/" target="_blank">
          Visual Studio Code
        </a>{" "}
        é uma ferramenta leve, rápida e extremamente flexível, que se adapta ao
        fluxo de trabalho de qualquer desenvolvedor, de iniciantes a
        profissionais experientes.
      </>
    ),
  },
  {
    title: "PlatformIO IDE",
    //Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    image: PIOimage, // Use the imported image variable here
    description: (
      <>
        O{" "}
        <a
          href="https://platformio.org/"
          target="_blank"
        >
          PlatformIO
        </a>{" "}
        é um ecossistema de desenvolvimento multiplataforma e de arquitetura cruzada projetado para engenheiros de sistemas embarcados e desenvolvedores que criam aplicações para produtos embarcados, especialmente na área de Internet das Coisas (IoT).
      </>
    ),
  },
  {
    title: "Arm® Cortex® M4 32-bit RISC Core",
    //Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    image: STM32Image, // Use the imported image variable here
    description: (
      <>
        A placa{" "}
        <a
          href="https://github.com/WeActStudio/WeActStudio.MiniSTM32F4x1"
          target="_blank"
        >
          Black Pill
        </a>{" "}
        com o{" "}
        <a
          href="https://www.st.com/en/microcontrollers-microprocessors/stm32f411.html"
          target="_blank"
        >
          STM32F411CEU6
        </a>{" "}
        é uma opção de excelente custo-benefício para quem precisa de mais poder
        de computação e flexibilidade do que plataformas como o{" "}
        <a href="https://www.arduino.cc/" target="_blank">
          Arduino
        </a>{" "}
        podem oferecer.
      </>
    ),
  },
];
function Feature({ title, Svg, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : image ? (
          <img src={image} className={styles.featureImage} alt={title} />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
