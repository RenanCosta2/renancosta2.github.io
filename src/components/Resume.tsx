import React from 'react';

export function Resume() {
  return (
    <section className="resume-container">
      <div className="resume-section">
        <h1 className="resume-title">Experiência</h1>
        <div className="resume-content">
          <ul>
            <li className="resume-item">
              <strong>Moderador de Comunidade – Twitch (Streamer Rakin) | Julho 2020 – Dezembro 2023</strong>
              <ul className="resume-sublist">
                <li>Gestão da comunidade do streamer Rafael “Rakin” Knittel, sendo responsável pela gestão e organização de uma comunidade online com milhares de usuários simultâneos, garantindo interação saudável durante as transmissões ao vivo.</li>
                <li>Monitoramento e aplicação das regras da comunidade, gerenciando conflitos e assegurando interações saudáveis.</li>
                <li>Colaboração com a equipe de moderação para implementar melhorias nas políticas da comunidade.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h1 className="resume-title">Educação</h1>
        <div className="resume-content">
          <ul>
            <li className="resume-item">
              <strong>Universidade Federal Rural do Semi-Árido – UFERSA | Novembro 2024</strong>
              <br />Engenharia de Software
              <ul className="resume-sublist">
                <li>Metodologias Ágeis</li>
                <li>Engenharia de Dados</li>
                <li>Redes Neurais</li>
                <li>Análise e Projeto de Sistemas</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li className="resume-item">
              <strong>Universidade Federal Rural do Semi-Árido – UFERSA | Novembro 2024</strong>
              <br />Tecnologia da Informação
              <ul className="resume-sublist">
                <li>Banco de Dados</li>
                <li>Cálculo e Estatística</li>
                <li>Matemática e Geometria</li>
                <li>Engenharia de Software</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h1 className="resume-title">Habilidades</h1>
        <div className="resume-content">
          <ul>
            <li className="resume-item">
              <strong>Linguagens e Ferramentas de Análise:</strong>
              <br />
              Python (Pandas, NumPy, Matplotlib, Scikit-learn), SQL
            </li>
            <li className="resume-item">
              <strong>Visualização e Apresentação de Dados:</strong>
              <br />
              Power BI, Tableau, Excel, PowerPoint
            </li>
            <li className="resume-item">
              <strong>Estatística e Modelagem:</strong>
              <br />
              Estatística descritiva e inferencial, Modelagem de Dados
            </li>
            <li className="resume-item">
              <strong>Outras Competências:</strong>
              <br />
              Pensamento Analítico, Comunicação de Insights, Git
            </li>
            <li className="resume-item">
              <strong>Conhecimentos Complementares:</strong>
              <br />
              Desenvolvimento de APIs com Django e Spring Boot
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h1 className="resume-title">Idiomas</h1>
        <div className="resume-content">
          <ul>
            <li className="resume-item"><strong>Português:</strong> Nativo</li>
            <li className="resume-item"><strong>Inglês:</strong> Intermediário (B2)</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h1 className="resume-title">Certificados</h1>
        <div className="resume-content">
          <ul>
            <li className="resume-item">
              <strong>
                <a 
                href="https://www.coursera.org/account/accomplishments/verify/4YGCOV60XD2K" 
                target="_blank"
                rel="noopener noreferrer"
                >
                  Ask Questions to Make Data-Driven Decisions
                </a> | Abril 2025
              </strong>
              <br />Google
            </li>
            <li className="resume-item">
              <strong>
                <a 
                href="https://www.credly.com/badges/574e6071-7ccf-461c-8844-6f4896b47a00" 
                target="_blank"
                rel="noopener noreferrer"
                >
                  Data Analytics Essentials
                </a> | Março 2025
              </strong>
              <br />Cisco Networking Academy
            </li>
            <li className="resume-item">
              <strong>
                <a 
                href="https://www.coursera.org/account/accomplishments/verify/QPN2L4LJZSZ7" 
                target="_blank"
                rel="noopener noreferrer"
                >
                  Connect and Protect: Networks and Network Security
                </a> | Fevereiro 2025
              </strong>
              <br />Google
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
