import React, { useEffect, useState } from 'react';
import cheerio from 'cheerio';

const LatestLink: React.FC = () => {
  const [latestLink, setLatestLink] = useState<string | null>(null);

  useEffect(() => {
    // Replace this URL with the webpage you want to scrape
    const url = 'https://www.sii.cl/normativa_legislacion/circulares/2023/indcir2023.htm';

    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html);
        const links = $('a'); // Select all <a> elements

        let latestLinkUrl = '';
        let latestTimestamp = 0;

        links.each((_index, element) => {
          const linkUrl = $(element).attr('href') || '';
          const timestamp = Date.parse($(element).attr('data-timestamp') || '');

          if (timestamp > latestTimestamp) {
            latestTimestamp = timestamp;
            latestLinkUrl = linkUrl;
          }
        });

        setLatestLink(latestLinkUrl);
      })
      .catch((error) => {
        console.error('Error fetching and parsing the webpage:', error);
      });
  }, []);

  return (
    <div>
      <h2>Latest Link:</h2>
      {latestLink ? (
        <a href={latestLink} target="_blank" rel="noopener noreferrer">
          {latestLink}
        </a>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default LatestLink;
