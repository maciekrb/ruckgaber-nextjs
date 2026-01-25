'use client'
import React from 'react'
import { useLingui } from '@lingui/react/macro'
import { red } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import Typography from '@mui/material/Typography'

const StyledDiv = styled('div')(() => ({
  '& .c0': {
    paddingTop: '0pt',
    paddingBottom: '0pt',
    lineHeight: 1.7,
    orphans: 2,
    widows: 2,
    textAlign: 'left',
    marginRight: '-30.4pt',
    marginBlockStart: '0.8em',
    marginBlockEnd: '0.8em',
  },
  '& .MuiSvgIcon-root': {
    position: 'relative',
    top: '5px',
  },
  '& .c5': {
    color: '#000000',
    fontWeight: 700,
    textDecoration: 'none',
    verticalAlign: 'baseline',
    fontSize: '11pt',
  },
  '& .c9': {
    textDecoration: 'none',
    verticalAlign: 'baseline',
    fontSize: '11pt',
    fontStyle: 'normal',
  },
  '& .c2': {
    color: '#000000',
    textDecoration: 'none',
    verticalAlign: 'baseline',
    fontSize: '11pt',
    fontStyle: 'normal',
  },
  '& .c16': {
    color: '#000000',
    textDecoration: 'none',
    verticalAlign: 'baseline',
    fontStyle: 'normal',
  },
  '& .c32': {
    color: '#1155cc',
    textDecoration: 'underline',
  },
  '& .c26': {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '16pt',
    fontStyle: 'normal',
  },
  '& .c18': {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '11pt',
    fontStyle: 'normal',
  },
  '& .c6': {
    fontSize: '10pt',
    fontWeight: 400,
  },
  '& .c17': {
    textDecoration: 'none',
    verticalAlign: 'baseline',
    fontStyle: 'normal',
  },
  '& .c19': {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '11pt',
  },
  '& .c27': {
    color: '#000000',
    textDecoration: 'none',
  },
  '& .c33': {
    textDecoration: 'none',
    fontSize: '11pt',
  },
  '& .c44': {
    listStylePosition: 'inside',
    textIndent: '0pt',
  },
  '& .c30': {
    fontWeight: 400,
  },
  '& .c1': {
    fontWeight: 400,
  },
  '& .c46': {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  '& .c4': {
    verticalAlign: 'super',
    fontSize: '12pt',
  },
  '& .c35': {
    padding: 0,
    margin: 0,
  },
  '& .c8': {
    fontWeight: 700,
  },
  '& .c48': {
    fontWeight: 700,
  },
  '& .c28': {
    fontStyle: 'normal',
  },
  '& .c10': {
    color: '#ff0000',
  },
  '& .c13': {
    color: '#3366ff',
  },
  '& .c50': {
    fontSize: '4pt',
  },
  '& .c45': {
    color: '#9900ff',
  },
  '& .c23': {
    verticalAlign: 'baseline',
  },
  '& .c41': {
    fontSize: '15pt',
  },
  '& .c21': {
    height: '11pt',
  },
  '& .c22': {
    fontSize: '13pt',
  },
  '& .c36': {
    fontSize: '12pt',
  },
  '& .c11': {
    verticalAlign: 'super',
  },
  '& .c37': {
    fontSize: '11pt',
  },
  '& .c15': {
    fontSize: '9pt',
  },
  '& .c43': {},
  '& .c38': {
    fontSize: '16pt',
  },
  '& .c25': {
    fontSize: '8pt',
  },
  '& .c3': {
    fontStyle: 'italic',
  },
  '& .c14': {
    fontSize: '0.8rem',
  },
  '& .c60': {
    fontSize: '0.8rem',
  },
  '& .c34': {
    color: '#0000ff',
  },
  '& .c12': {
    fontSize: '14pt',
  },
  '& .c42': {
    fontSize: '7pt',
  },
  '& .c40': {
    fontSize: '18pt',
  },
  '& .composition-id': {
    fontWeight: 700,
    marginRight: '5px',
    fontStyle: 'italic',
  },
  '& .composition-title': {
    fontWeight: 700,
    marginRight: '5px',
    fontStyle: 'italic',
  },
  '& .composition-author': {
    fontWeight: 400,
    fontSize: '0.9rem',
    marginRight: '5px',
    fontStyle: 'italic',
  },
  '& .composition-description': {
    fontWeight: 400,
    fontSize: '0.9rem',
    marginRight: '5px',
    fontStyle: 'italic',
  },
  '& .composition-opus': {
    fontWeight: 700,
  },
  '& .composition-notes': {
    color: '#777777',
    fontSize: '0.9rem',
    marginLeft: '5px',
  },
  '& h3': {
    marginTop: 30,
  },
}))

const CompositionsMarkup = () => {
  const { t } = useLingui()
  return (
    <StyledDiv>
      <a className="section-ref" id="section-A" />
      <Typography variant="h3" gutterBottom>
        {t`A. Music for piano and orchestra`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.1.</span>{' '}
          <span className="composition-title">
            <em>Rondo de concert As-Dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 17,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-description">
            <em>Piano et Orchestre, 1853,</em>
          </span>{' '}
          <span className="composition-author">J. Ruckgaber,</span>{' '}
          <span className="composition-manuscript">{t`ms`}</span>
          <em>.</em>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.1.%20Rondo%20de%20concert%20op.17%20%28366-368%29%20obraz%20497-506.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.2a.</span>{' '}
          <span className="composition-title">
            <em>
              Partition des grandes Variationes sur un th&egrave;me polonais,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 18,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-description">
            <em>
              pour Piano avec L&rsquo;accompagnement de tout L&rsquo;orchestre,
            </em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}</span>
          <em>.</em>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.2.a.%20Partition%20des%20grandes%20Variationes%2C%20op.%2018%20%28330-359%29%20obraz%20388-409.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.2b.</span>{' '}
          <span className="composition-title">
            <em>Grandes Variations avec l&rsquo;Introduction et Finale,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op.18,</em>
          </span>{' '}
          <sup className="composition-sources">2, 4</sup>{' '}
          <span className="composition-description">
            <em>
              pour le piano aves tout orchestre, dediees a M-elle Jeanette
              Hofman
            </em>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.a.</span>{' '}
          <span className="composition-title">
            <em>Concerto pour Piano</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.a.%20%28330-359%29obraz%20058%20tylko%20ok%C5%82adka.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">({t`cover only`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.b.</span>{' '}
          <span className="composition-title">
            <em>Concerto pour le Piano Forte,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-description">
            <em>avec L&rsquo;accompagnement de grande Orchestre, Partition,</em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.b.%20Concerto%20pour%20le%20Piano%20Forte%2C%20avec%20L%E2%80%99accompagnement%20de%20grande%20%E2%80%A8Orchestre%2C%20Partition%20%28366-368%29%20obr.382-428.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">({t`probably mixed pages`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.c.</span>{' '}
          <span className="composition-title">
            <em>
              Concerto pour le Piano, avec l&rsquo;accompagnement de grand
              Orchestre,
            </em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.c.%20Concerto%20pour%20le%20Piano%2C%20avec%20l%E2%80%99accompagnement%20de%20grand%20%E2%80%A8Orchestre%20%28330-359%29%20%28330-359%29%20obr.122-150%2C%20brak%20str.1%2C2%2C3%20re%CC%A8kopisu.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`missing pages ${'1,2,3'} of the manuscript, or is it ${'A.5'}?`}
            )
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.d.</span>{' '}
          <span className="composition-title">
            <em>Concerto pour le Piano Viola</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.d.%20Concerto%2C%20Viola%20%28330-359%29%20obr.190b-195a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.e.</span>{' '}
          <span className="composition-title">
            <em>Concerto pour le Piano Corno 2ndo,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.c.%20Concerto%20pour%20le%20Piano%2C%20avec%20l%E2%80%99accompagnement%20de%20grand%20%E2%80%A8Orchestre%20(330-359)%20(330-359)%20obr.122-150%2C%20brak%20str.1%2C2%2C3%20r%C4%99kopisu.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.f.</span>{' '}
          <span className="composition-title">
            <em>Concerto, Tympanie,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.f.%20Concerto%2C%20Tympanie%20%28330-359%29%20obraz%20203-204a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.g.</span>{' '}
          <span className="composition-title">
            <em>Concerto, Trombone Basso,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.g.%20Concerto%2C%20Trombone%20Basso%20%28330-359%29%20obraz%20204b-205a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.h.</span>{' '}
          <span className="composition-title">
            <em>Concerto, Fagotto 2ndo,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.h.%20Concerto%2C%20Fagotto%202ndo%20%28330-359%29%20obraz%20205b-207.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.i.</span>{' '}
          <span className="composition-title">
            <em>Concerto, Fagotto 1mo,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.i.%20Concerto%2C%20Fagotto%201mo%20%28330-359%29%20obraz%20208-211a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.j.</span>{' '}
          <span className="composition-title">
            <em>Concerto, Trombe 2ndo,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.j.%20Concerto%2C%20Trombe%202ndo%20%28330-359%29%20obraz%20211b-212a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.3.k.</span>{' '}
          <span className="composition-title">
            <em>Concerto, Trombe 1mo,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.3.k.%20Concerto%2C%20Trombe%201mo%20%28330-359%29%20obraz%20212b.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.4.</span>{' '}
          <span className="composition-title">
            <em>Premier concerto pour le Piano Forte,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op.20,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-description">
            <em>avec l&rsquo;accompagnement de grand Orchestre, 1872,</em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.4.%20Premier%20Concerto%20op.20%20%28330-356%29%20obr.356-387.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.a.</span>{' '}
          <span className="composition-title">
            <em>Violino principale du Grande Concert pour le Piano Forte,</em>
          </span>{' '}
          <sup className="composition-sources">3, 4</sup>{' '}
          <span className="composition-description">
            <em>Dediee a son ami Charles Lipinsky,</em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.a.%20Violino%20Principale%20du%20Grande%20Concert%20%28330-359%29%20obr.151-156.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.b.</span>{' '}
          <span className="composition-title">
            <em>Viola du Grande Concert,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.b.%20Viola%20du%20Grande%20Concert%20%28330-359%29%20obr.%20157-161.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.c.</span>{' '}
          <span className="composition-title">
            <em>Basso Violoncello Grande Concert</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.c.%20Basso%20Violoncello%20Grande%20Concert%20%28330-359%29%20obr.%20195b-198a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.d.</span>{' '}
          <span className="composition-title">
            <em>Grand Concerto Violino II</em>
          </span>{' '}
          <span className="composition-author">pour J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.d.%20Grand%20Concerto%20Violino%20II%20%28330-359%29%20obraz%20178-182.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.e.</span>{' '}
          <span className="composition-title">
            <em>
              Grand Concerto Corno 1<sup>mo</sup>
            </em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.e.%20Grand%20Concerto%20Corno%201mo%20%28330-359%29%20obr.%20167-170.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.f.</span>{' '}
          <span className="composition-title">
            <em>Gr. Concerto Violoncelle e Contra Basso</em>
          </span>{' '}
          <span className="composition-author">pour Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.f.%20Gr.%20Concerto%20Violoncelle%20e%20Contra%20Basso%20%28330-359%29%20obr.%20171-177.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.g.</span>{' '}
          <span className="composition-title">
            <em>
              Grand Concerto Clarinetto 1<sup>mo</sup> in C
            </em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.g.%20Grand%20Concerto%20Clarinetto%201mo%20%28330-359%29%20obraz%20216-219a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.h.</span>{' '}
          <span className="composition-title">
            <em>Grand Concerto Oboe 2do</em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.h.%20Grand%20Concerto%20Oboe%202do%20%28330-359%29%20obraz%20219b-221a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.i.</span>{' '}
          <span className="composition-title">
            <em>Grand Concerto Oboe 1mo</em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.i.%20Grand%20Concerto%20Oboe%201mo%20%28330-359%29%20obraz%20221b-224.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.j.</span>{' '}
          <span className="composition-title">
            <em>Grand Concerto Trombe 1mo</em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.j.%20Grand%20Concerto%20Trombe%201mo%20(330-359)%20obraz%20213a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.k.</span>{' '}
          <span className="composition-title">
            <em>Grand Concerto Clarinetto 2do</em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.k.%20Grand%20Concerto%20Clarinetto%202do%20%28330-359%29%20obraz%20213b-215.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.l.</span>{' '}
          <span className="composition-title">
            <em>Gr. Concert Violino 2do</em>
          </span>{' '}
          <span className="composition-author">pour J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.l.%20Gr.%20Concert%20Violino%202do%20%28330-359%29%20obraz%20185-189.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.5.m.</span>{' '}
          <span className="composition-title">
            <em>Grande Concerto, Viola</em>
          </span>{' '}
          <span className="composition-author">pour J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.5.m.%20Grande%20Concerto%2C%20Viola%20%28330-359%29%20obraz%20198b-202.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.6.</span>{' '}
          <span className="composition-title">
            <em>Einzugs Marsch zur Jungfrau von Orlean,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 25,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-description">
            <em>
              eine romantische Trag&ouml;die v. Schiller, f&uuml;r Orchester und
              Piano,
            </em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.6.%20Einzugs%20Marsch%20zur%20Jungfrau%20von%20Orlean%20op.25%28330-359%29%20obr.%20428-429.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.7.</span>{' '}
          <span className="composition-title">
            <em>Adagio de concert,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 38,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-description">
            <em>en mi-mineur, piano avec l&rsquo;orchestre</em>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.7.a.</span>{' '}
          <sup className="composition-sources">2</sup>{' '}
          <span className="composition-description">
            <em>
              Adagio de Concert en Mi mineur avec l&rsquo; accompagnement de
              l&rsquo;orchestre pour Piano, op.38, &ldquo;onpent executer cette
              morceau pour piano seul en jouant seulement les petites
              notes&rdquo;
            </em>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.7.b.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-description">
            <em>
              Adagio pour piano, tiree du premier concert avec l&rsquo;
              accompagnement de l&rsquo;orchestre, op.38, &ldquo;Zum Jahre 1872
              ganzliche Umarbeitung&rdquo;.
            </em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.7.b.%20Adagio%20op.%2038%20%28366-368%29%20obr.343-364.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.7.c.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-description">
            <em>
              Adagio de Concert en mi miner, piano avec l&rsquo;orchestre
              &bdquo;comment executer cette morceau pour piano seul en jouant
              seulement les petites notes” &rdquo;
            </em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.7.c.%20Adagio%20de%20concert%2C%20op.38%20%28366-368%29obraz365-381.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.8.</span>{' '}
          <span className="composition-title">
            <em>Rondo de concert,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 40,</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-description">
            <em>
              pour le Piano Forte avec l&rsquo;accompagnement de grande
              Orchestre,
            </em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.8.%20Rondo%20de%20concert%2C%20op.40%20%28F366-368%29%20obr.454-468%20cz.3.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.a.</span>{' '}
          <span className="composition-title">
            <em>Rondo tiree du 1mo Concert, en mi mineur,</em>
          </span>{' '}
          <sup className="composition-sources">3, 4</sup>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.a.%20Rondo%20tiree%20du%201mo%20Concert%2C%20en%20mi%20mineur%20%28330-359%29%20obr.059-067.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.b.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Corno 2<sup>do</sup> E.G.Es.E Allegretto,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.b.%20Rondo%20de%20Concert%20op.41%2C%20Corno%202do%20%28330-359%29%20obraz%20074-075.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.c.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Trombe 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.c.%20Rondo%20de%20Concert%20op.41%2C%20Trombe%201mo%20%28330-359%29%20obraz%20077-078.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.d.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Trombe 2<sup>do</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.d.%20Rondo%20de%20Concert%20op.41%2C%20Trombe%202do%20%28330-359%29%20obraz%20079-080a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.e.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Clarinetto 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.e.%20Rondo%20de%20Concert%20op.41%2C%20Clarinetto%201mo%20%28330-359%29%20obraz%20080b-082a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.f.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Clarinetto 2<sup>do</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.f.%20Rondo%20de%20Concert%20op.41%2C%20Clarinetto%202do%20%28330-359%29%20obraz%20082b-083.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.g.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Fagotto 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.g.%20Rondo%20de%20Concert%20op.41%2C%20Fagotto%201mo%20%28330-359%29%20obraz%20084-086.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.h.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Tympani,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.h.%20Rondo%20de%20Concert%20%20op.41%2C%20Tympani%20%28330-359%29%20obraz%20087-088a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.i.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Fagotto 2<sup>do</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.i.%20Rondo%20de%20Concert%20%20op.41%2C%20Fagotto%202do%20%28330-359%29%20obraz%20088b-090.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.j.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Trombone Basso,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.j.%20Rondo%20de%20Concert%20op.41%2C%20Trombone%20Basso%20%28330-359%29%20obraz%20091-092a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.k.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Basso et Violoncello,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.k.%20Rondo%20de%20Concert%20op.41%2C%20Basso%20et%20Violoncello%20%28330-359%29%20obraz%20092b-095.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.l.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Violino 1<sup>mo</sup>, principale,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.l.%20Rondo%20de%20Concert%20op.41%2C%20Violino%201mo%2C%20principale%20%28330-359%29%20obraz%20096-099.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.m.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Violino 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.m.%20Rondo%20de%20Concert%20op.41%2C%20Violino%201mo%20%28330-359%29%20obraz%20100-104.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">({t`page 103 seems added`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.n.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Violino 2<sup>do</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.n.%20Rondo%20de%20Concert%20op.41%2C%20Violino%202do%20%28330-359%29%20obraz%20105-108.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.o.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Viola,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.o.%20Rondo%20de%20Concert%20op.41%2C%20Viola%20%28330-359%29%20obraz%20109-110a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`doubtful pictures 111 i 112`})
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.p.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Flauto 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.p.%20Rondo%20de%20Concert%20op.41%2C%20Flauto%201mo%20%28330-359%29%20obraz%20113-115a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.r.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Flautino 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.r.%20Rondo%20de%20Concert%20op.41%2C%20Flautino%201mo%20%28330-359%29%20obraz%20115b-116a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.s.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Oboe 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.s.%20Rondo%20de%20Concert%20op.41%2C%20Oboe%201mo%20%28330-359%29%20obraz%20116b-118a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.t.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Oboe 2<sup>do</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.t.%20Rondo%20de%20Concert%20op.41%2C%20Oboe%202do%20%28330-359%29%20obraz%20118b-119.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.9.u.</span>{' '}
          <span className="composition-title">
            <em>Rondo de Concert</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              Corno 1<sup>mo</sup>,
            </em>
          </span>{' '}
          <span className="composition-author">par J. Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.9.u.%20Rondo%20de%20Concert%20op.41%2C%20Corno%201mo%20%28330-359%29%20obraz%20120-121.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.10.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture de Concert, Partition,</em>
          </span>{' '}
          <span className="composition-author">par Johan Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.10.%20Grande%20Ouverture%20de%20Concert%2C%20Partition%20%20(330-359)%20obraz%20162-166.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`the cover does not match the music, see A.12?`})
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.11.</span>{' '}
          <span className="composition-title">
            <em>Two Marches,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 44,</em>
          </span>{' '}
          <span className="composition-description">
            <em>dedicated to the Lviv National Guard, ca 1850</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.11.%20Dwa%20marsze%20Gwardyi%20Narodowej%20Lwowskiej%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">6</sup>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.11.a.%20(280-329)%20obraz%20279-285.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">3</sup>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.11.b.%20(330-359)%20obraz%20279-284.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">3</sup>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`the same cover, different music`})
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.a.</span>{' '}
          <span className="composition-title">
            <em>
              Grande Ouverture de Concert, pour grande Orchestra, Partition,
            </em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.a.1.%20(280-329)%20obraz%20161-227.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.a.2.%20(280-329)%20obraz%20228-231.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.b.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture de Concert,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 63</em>
          </span>{' '}
          <span className="composition-description">
            <em>&ndash; Partition, pour grande Orchestre</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.b.%20Grande%20Ouverture%20de%20Concert%20op.63%2C%20Partition%20(330-359)%20obraz%20441-569.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.c.1.</span>{' '}
          <span className="composition-title">
            <em>Grand Ouverture de Concert, Violino 1mo Directore,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber</span>{' '}
          <sup className="composition-sources">3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.c.1.%20Grande%20Ouverture%20de%20Concert%2C%20Violino%201mo%20Directore%20(280-329)%20obraz%20074-095.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.c.2.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture de Concert, Violino 1mo Directore,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <span className="composition-description">
            <em>1863</em>
          </span>{' '}
          <sup className="composition-sources">3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.c.2.%20Grande%20Ouverture%20de%20Concert%2C%20Violino%201mo%20Directore%20(330-359)%20obraz%20570-581.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.c.3.</span>{' '}
          <span className="composition-title">
            <em>
              Grand Ouverture de concert, Violino 1<sup>mo</sup>, Andante con
              moto,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.c.3.%20Grande%20Ouverture%20de%20Concert%2C%20Violino%201mo%20(280-329)%20obraz%20110b-119a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.d.1.</span>{' '}
          <span className="composition-title">
            <em>
              Grand Ouverture de concert, Violino 2<sup>do</sup>, Andante con
              moto,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.d.1.a.%20Grande%20Ouverture%20de%20Concert%2C%20Violino%202do%20(280-329)%20obraz%20096-101.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.d.2.%20Grande%20Ouverture%20de%20Concert%2C%20Violino%202do(280-329)%20obraz%20119b-128a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.d.2.</span>{' '}
          <span className="composition-title">
            <em>
              Grand Ouverture de concert, Violino 2<sup>do</sup>, Andante con
              moto,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.d.2.%20Grande%20Ouverture%20de%20Concert%2C%20Violino%202do(280-329)%20obraz%20119b-128a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.d.3.</span>{' '}
          <span className="composition-title">
            <em>
              Grande Ouverture, Violino 2<sup>do</sup>, Andante con moto,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.d.3.%20Grande%20Ouverture%20de%20Concert%2C%20Violino%202do%20(280-329)%20obraz%20128b-133a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.e.</span>{' '}
          <span className="composition-title">
            <em>Grand Ouverture de concert, Viola, Andante con moto,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.e.%20Grande%20Ouverture%20de%20Concert%2C%20Viola%20(280-329)%20obraz%20133b-141a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.f.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture, Viola, Andante con moto,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.f.%20Grande%20Ouverture%20de%20Concert%2C%20Viola%20(280-329)%20obraz%20141b-146.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.g.</span>{' '}
          <span className="composition-title">
            <em>Grand Ouverture de concert, Violoncello, Andante con moto,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.g.%20Grande%20Ouverture%20de%20Concert%2C%20Violoncello%20(280-329)%20obraz%20147-160.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.h.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture de Concert, Flauto, Andante con moto,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.h.%20Grande%20Ouverture%20de%20Concert%2C%20Flauto%20(330-359)%20obraz%20329-333.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.i.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture, Basso, Andante con moto,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.i.%20Grande%20Ouverture%20de%20Concert%2C%20Basso%20(330-359)%20obraz%20336-341.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.j.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture, Basso, Andante con moto,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.j.%20Grande%20Ouverture%20de%20Concert%2C%20Basso%20(330-359)%20obraz%20348-355.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.k.</span>{' '}
          <span className="composition-title">
            <em>
              Grande Ouverture de Concert, Corno 3<sup>tia</sup> in E, Andante
              con moto,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.k.%20Grande%20Ouverture%20de%20Concert%2C%20Corno%203tia%20(330-359)%20obraz%20321-328.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`Something wrong, three endings?`})
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">A.12.l.</span>{' '}
          <span className="composition-title">
            <em>Grande Ouverture de Concert, Basso,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.l.%20Grande%20Ouverture%20de%20Concert%2C%20Basso%20(330-359)%20obraz%20342-347.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-entry-spacer"></div>
        <sup className="composition-sources">3</sup>{' '}
        <span className="composition-pdf">
          <a
            href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.f.%20Grande%20Ouverture%20de%20Concert%2C%20Viola%20(280-329)%20obraz%20141b-146.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
          </a>
        </span>
      </div>

      <div className="composition-entry">
        <span className="composition-id">A.12.g.</span>{' '}
        <span className="composition-title">
          <em>Grand Ouverture de concert, Violoncello, Andante con moto,</em>
        </span>{' '}
        <span className="composition-author">par Jean Ruckgaber,</span>{' '}
        <sup className="composition-sources">3</sup>{' '}
        <span className="composition-pdf">
          <a
            href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.g.%20Grande%20Ouverture%20de%20Concert%2C%20Violoncello%20(280-329)%20obraz%20147-160.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
          </a>
        </span>
      </div>

      <div className="composition-entry">
        <span className="composition-id">A.12.h.</span>{' '}
        <span className="composition-title">
          <em>Grande Ouverture de Concert, Flauto, Andante con moto,</em>
        </span>{' '}
        <span className="composition-author">par Jean Ruckgaber,</span>{' '}
        <sup className="composition-sources">3</sup>{' '}
        <span className="composition-pdf">
          <a
            href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.h.%20Grande%20Ouverture%20de%20Concert%2C%20Flauto%20(330-359)%20obraz%20329-333.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
          </a>
        </span>
      </div>

      <div className="composition-entry">
        <span className="composition-id">A.12.i.</span>{' '}
        <span className="composition-title">
          <em>Grande Ouverture, Basso, Andante con moto,</em>
        </span>{' '}
        <span className="composition-author">par Jean Ruckgaber,</span>{' '}
        <sup className="composition-sources">3</sup>{' '}
        <span className="composition-pdf">
          <a
            href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.i.%20Grande%20Ouverture%20de%20Concert%2C%20Basso%20(330-359)%20obraz%20336-341.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
          </a>
        </span>
      </div>

      <div className="composition-entry">
        <span className="composition-id">A.12.j.</span>{' '}
        <span className="composition-title">
          <em>Grande Ouverture, Basso, Andante con moto,</em>
        </span>{' '}
        <span className="composition-author">par Jean Ruckgaber,</span>{' '}
        <sup className="composition-sources">3</sup>{' '}
        <span className="composition-pdf">
          <a
            href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.j.%20Grande%20Ouverture%20de%20Concert%2C%20Basso%20(330-359)%20obraz%20348-355.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
          </a>
        </span>
      </div>

      <div className="composition-entry">
        <span className="composition-id">A.12.k.</span>{' '}
        <span className="composition-title">
          <em>
            Grande Ouverture de Concert, Corno 3<sup>tia</sup> in E, Andante con
            moto,
          </em>
        </span>{' '}
        <span className="composition-author">par Jean Ruckgaber,</span>{' '}
        <sup className="composition-sources">3, 4</sup>{' '}
        <span className="composition-pdf">
          <a
            href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.k.%20Grande%20Ouverture%20de%20Concert%2C%20Corno%203tia%20(330-359)%20obraz%20321-328.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
          </a>
        </span>{' '}
        <span className="composition-notes">
          ({t`Something wrong, three endings?`})
        </span>
      </div>

      <div className="composition-entry">
        <span className="composition-id">A.12.l.</span>{' '}
        <span className="composition-title">
          <em>Grande Ouverture de Concert, Basso,</em>
        </span>{' '}
        <span className="composition-author">par Jean Ruckgaber,</span>{' '}
        <sup className="composition-sources">3</sup>{' '}
        <span className="composition-pdf">
          <a
            href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/A.12.l.%20Grande%20Ouverture%20de%20Concert%2C%20Basso%20(330-359)%20obraz%20342-347.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
          </a>
        </span>
      </div>
      <div className="composition-entry-spacer"></div>

      <a className="section-ref" id="section-B" />
      <Typography variant="h3" gutterBottom>
        B. {t`Music for a chamber orchestra`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">B.1.</span>{' '}
          <span className="composition-title">
            <em>Quintet pour piano D-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 37,</em>
          </span>{' '}
          <span className="composition-description">
            <em>im Jahre 1815</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">B.2.a.</span>{' '}
          <span className="composition-title">
            <em>
              Premier Quatuer pour le Violon 1<sup>mo</sup>, 2<sup>do</sup>,
              Viola et cello,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 87,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <span className="composition-description">
            <em>7 April 1864,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/B.2.a.%20Premier%20Quatuer%20pour%20Violon%201mo%2C%202do%2C%20Viola%20et%20cello%20op.%2087%20%28366-368%29%20obraz%20108-134.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">B.2.b.</span>{' '}
          <span className="composition-title">
            <em>
              1er Quatuer pour Violon 1<sup>mo</sup>, Violon 2<sup>do</sup>,
              Viola et Violoncello,
            </em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber</span>{' '}
          <span className="composition-opus">
            <em>Op. 87,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Violoncello</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/B.2.b.1.%20Premier%20Quarteur%20pour%20le%20Violon%201mo%2C%202do%2C%20Viola%20et%20Violoncello%2C%20op.87%2C%20Violoncello%20%28366-368%29%20obraz%20135-141.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">B.2.c.</span>{' '}
          <span className="composition-title">
            <em>
              1er Quatuer pour Violon 1<sup>mo</sup>, Violon 2<sup>do</sup>,
              Viola et Violoncello,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 87,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Viola</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/B.2.b.2.%20Premier%20Quatuer%20pour%20le%20Violon%201mo%2C%202do%2C%20Viola%20et%20Violoncello%2C%20op.%2087%2C%20Viola%20%28366-368%29%20obraz%20142-147.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">B.2.d.</span>{' '}
          <span className="composition-title">
            <em>
              1er Quatuer pour Violon 1<sup>mo</sup>, Violon 2<sup>do</sup>,
              Viola et Violoncello,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 87,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Violon 2do</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/B.2.b.3.%20Premier%20Quatuer%20pour%20le%20Violon%201mo%2C%202do%2C%20Viola%20et%20Violoncello%2C%20op.%2087%2C%20Violon%202do%20%28366-368%29%20obraz%20148-153.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">B.2.e.</span>{' '}
          <span className="composition-title">
            <em>
              1er Quatuer pour Violon 1<sup>mo</sup>, Violon 2<sup>da</sup>,
              Viola et Violoncello,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>Ouvre 87,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Violon 1mo</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/B.2.c.%20Premier%20Quatuer%20pour%20le%20Violon%2C%20Violon%201mo%2C%20op.%2087%20%28366-368%29%20obraz%20154-162.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <a className="section-ref" id="section-C" />
      <Typography variant="h3" gutterBottom>
        C. {t`Music for piano`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.1.</span>{' '}
          <span className="composition-title">
            <em>Mazur pour piano D-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 1,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-lle Doris Renzhausen,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.1.%20Mazur%20D-dur%2C%20op.1%20%28280-329%29%20obraz%20296.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.2.</span>{' '}
          <span className="composition-title">
            <em>Polonaise pour le pianoforte, a-moll,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 2,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-lle Octavie de Festenburg, ca 1825,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.2.%20Polonaise%20op.2%20%28280-329%29%20obraz%20529-530.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-version-note">({t`ms`}.)</span>,{' '}
          <sup className="composition-sources">3, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.2.a.%20Polonez%20op.%202%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <span className="composition-version-note">({t`print`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.3.</span>{' '}
          <span className="composition-title">
            <em>Polonaise pour le pianoforte, d-moll,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 3,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;di&eacute; &agrave; Jacques Bauer,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.3.%20%28280-329%29%20obraz%20531-532.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-version-note">({t`ms`}.)</span>,{' '}
          <sup className="composition-sources">3, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.3.a.%20Polonaise%20op.3%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <span className="composition-version-note">({t`print`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.4.</span>{' '}
          <span className="composition-title">
            <em>Polonaise pour le pianoforte, f-moll,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 4,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              d&eacute;di&eacute; &agrave; M-me la comtesse de Pieg&#322;owska,
            </em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.4.%20Polonaise%20op.4%20%28280-329%29%20obraz%20533-535.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-version-note">({t`ms`}.)</span>,{' '}
          <sup className="composition-sources">3, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.4.a.%20Polonaise%20op.4%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <span className="composition-version-note">({t`print`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.5.</span>{' '}
          <span className="composition-title">
            <em>III Cotillons pour le pianoforte</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              &agrave; M-me Ksawera Ruckgaber wyd. Piller &ndash; Lw&oacute;w,
              1923 r.
            </em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.6.</span>{' '}
          <span className="composition-title">
            <em>VII Cotillons,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 5,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;d. &agrave; M-lle Xavi&egrave;re de Rylska</em>
          </span>{' '}
          <sup className="composition-sources">2, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.6.%20VII%20Cotillons%2C%20op.%205%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.7.</span>{' '}
          <span className="composition-title">
            <em>IX Variations pour le piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 6,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-elle Caroline de Rylska,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.7.%20IX%20Variations%2C%20op.%206%20%28366-368%29obraz291-304.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.8.</span>{' '}
          <span className="composition-title">
            <em>Variations sur un th&egrave;me &bdquo;Robin de Bois&rdquo;,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 6,</em>
          </span>{' '}
          <span className="composition-description">
            <em>pour piano, par Charles Marie Weber,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.8.%20Variations%20_Robin%20de%20Bois_%20op.6%20%28330-359%29%20obraz%20433-438.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.9.</span>{' '}
          <span className="composition-title">
            <em>Polonaise,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 7,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;di&eacute; &agrave; M-lle W. Schneikert</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.10.</span>{' '}
          <span className="composition-title">
            <em>
              Collection de 4 polonaises, 10 valses avec trio, 1 quadrille, 2
              galloppes et 5 cotillons,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 8,</em>
          </span>{' '}
          <span className="composition-author">
            par J. Ruckgaber et J. Baschny,
          </span>{' '}
          <span className="composition-description">
            <em>1926 r.</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.11.</span>{' '}
          <span className="composition-title">
            <em>Charme du carnaval,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 9,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              d&eacute;di&eacute; &agrave; M-lle comte Hortense
              Ma&#322;achowska,
            </em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.11.%20Ta%C5%84ce.%20Op.%209%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.12.</span>{' '}
          <span className="composition-title">
            <em>Grand marche a 4 mains,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 10,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              &agrave; monsieur le comte de Fresnel, g&eacute;n&eacute;ral de la
              chevalierie, commandant g&eacute;n. en Galizie,
            </em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.12.a.%20Grand%20marche%20a%204%20mains%2C%20op.%2010%20(330-359)%20obr.%2056b%2C%20(280-329)%20obr.057-063.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.12.b.%20Grand%20marche%20a%204%20mains%2C%20op.%2010%20(280-329)%20obraz%20064-067.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.13.</span>{' '}
          <span className="composition-title">
            <em>Exercises de danses de l&rsquo;ann&eacute;e 1826,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 11,</em>
          </span>{' '}
          <span className="composition-author">
            compos&eacute;es par A. Braun et J. Ruckgaber
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.14.</span>{' '}
          <span className="composition-title">
            <em>Collection des danses,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 12,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              d&eacute;di&eacute;e &agrave; M-lle la comtesse Eveline
              Dzieduszycka
            </em>
          </span>{' '}
          <sup className="composition-sources">2, 8</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.14.%20Valses_Mazures_et_Galoppes%2C%20BJ.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.15.</span>{' '}
          <span className="composition-title">
            <em>2 polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 12</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.16.</span>{' '}
          <span className="composition-title">
            <em>Variations sur un th&egrave;me russe,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 12,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano &agrave; M-lle la comtesse Angelique Morszkowska,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.16.%20Variations%20sur%20un%20th%C3%A8me%20russe%2C%20op.%2012%20(366-368)%20obraz%20484-490a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.17.</span>{' '}
          <span className="composition-title">
            <em>No 2 Grande marche pour le pianoforte &agrave; 4 mains,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 12,</em>
          </span>{' '}
          <span className="composition-author">
            compos&eacute;e par J. Ruckgaber
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.17.%20No%202%20Grande%20marche%20%20pour%20le%20pianoforte%20%C3%A0%204%20mains%2C%20op.12%20(366-368)%20obraz%20490b-492.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.18.</span>{' '}
          <span className="composition-title">
            <em>Exercises de danses,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 13,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;d. &agrave; M-elle Melanie de Uruska</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.19.</span>{' '}
          <span className="composition-title">
            <em>Eugenie &ndash; polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 13,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-elle Eugenie Mehlieu,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.20.</span>{' '}
          <span className="composition-title">
            <em>Mazur &ndash; Favorit,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 14,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-elle H&eacute;l&egrave;ne de Gregoreska</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.21.</span>{' '}
          <span className="composition-title">
            <em>
              Fantasie sur un th&egrave;me de l&rsquo;op&eacute;ra, &bdquo;La
              dame blanche&rdquo;, G-moll,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 14,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.22.</span>{' '}
          <span className="composition-title">
            <em>
              Fantaisie tir&eacute;e de l&rsquo;op&eacute;ra &bdquo;Le dame
              blanche&rdquo;,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 15,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-me Louise Piller,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.23.</span>{' '}
          <span className="composition-title">
            <em>Exercices de danses pour le pianoforte,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op.15,</em>
          </span>{' '}
          <span className="composition-description">
            <em>ca 1830</em>
          </span>{' '}
          <sup className="composition-sources">6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.23.%20Ta%C5%84ce.%20Op.%2015%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          <em>Polonaise No 1 D-dur; Polonaise No 2 E-dur;</em>
          <br />
          <em>
            Walce: No 1 D-dur; No 2 G-dur; No 3 B-dur; No 4 F-dur "La dame
            blanche"; No 5 D-dur;
          </em>
          <br />
          <em>Mazur No 1 F-dur; Mazur No 2 D-dur / par M. Br...ski;</em>
          <br />
          <em>Galoppe D-dur;</em>
          <br />
          <em>Anglaises: No 1 D-dur; No 2 D-dur;</em>
          <br />
          <em>Cotillion: No 1 D-dur; No 2 A-dur No 3 D-dur</em>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.24.</span>{' '}
          <span className="composition-title">
            <em>Marche de Mo&iuml;se vari&eacute;e,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 15</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.24.%20Notatki%20%28%28330-359%29%20obraz%20514.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">({t`notes only`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.25.</span>{' '}
          <span className="composition-title">
            <em>Polonaise pour pianoforte, D-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 16,</em>
          </span>{' '}
          <sup className="composition-sources">1, 3, 4, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.25.%20Polonaise%20op.16%2C%20manuscript%2C%20%28280-329%29%20obraz%20536-538.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-version-note">({t`ms`}.)</span>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.25.a.%20Polonaise%20op.16%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <span className="composition-version-note">({t`print`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.26.</span>{' '}
          <span className="composition-title">
            <em>Valses,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 17,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano, ca 1835</em>
          </span>{' '}
          <sup className="composition-sources">2, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.26%20Valses%20op.17%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.27.</span>{' '}
          <span className="composition-title">
            <em>Grande Marche,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 17,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; 4 mains,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.27.%20Grande%20Marche%20a%204%20mains%2C%20op.17%20(330-359)%20obraz%20048b-050.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.28.</span>{' '}
          <span className="composition-title">
            <em>Rondo sur les motifs de &bdquo;Zalmira&rdquo; par Rossini,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 18,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano, 1866, Rondo 1824,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.28.%20Rondo%20sur%20les%20motifs%20de%20%E2%80%9EZalmira%E2%80%9D%2C%20op.%2018%2C%28330-359%29%20obraz%20284b-304.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">(+ bas, tenor 1mo, 2do?)</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.29.</span>{' '}
          <span className="composition-title">
            <em>
              Polonaise, mazures, cotillions, valse et galloppe - pour le
              Pianoforte,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 18</em>
          </span>{' '}
          <sup className="composition-sources">6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.29.%20Polonaise%2C%20mazures%2C%20cotillions%2C%20valse%20et%20galloppe%2C%20op.%2018%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          Polonaise Es-dur;
          <br />
          Masure No 1 A-dur; No 2 F-dur; No 3 D-dur ; No 4 D-dur ; No 5 D-dur;
          No 6 D-dur;
          <br />
          Cotillions No 1 D-dur; No 2 D-dur; No 3 D-dur; No 4 G-dur; No 5 D-dur;
          No 6 D-dur; No 7 D-dur;
          <br />
          Valse D-dur;
          <br />
          Galloppe c-moll.
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.30.</span>{' '}
          <span className="composition-title">
            <em>
              Grandes variationes sur un th&egrave;me du ballet
              &bdquo;Nina&rdquo; F-dur,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 19,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.30.%20Grandes%20variationes%20sur%20un%20th%C3%A8me%20du%20ballet%20%E2%80%9ENina%E2%80%9D%2C%20op.%2019%20(366-368)obraz507-514a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.31.</span>{' '}
          <span className="composition-title">
            <em>Polonaise pour le pianoforte,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 19,</em>
          </span>{' '}
          <span className="composition-description">
            <em>ca 1835</em>
          </span>{' '}
          <sup className="composition-sources">2, 6</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.31.a.%20Polonaise%20op.%2019%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.31.b.%20Polonaise%20op.19%2C%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.32.</span>{' '}
          <span className="composition-title">
            <em>
              Rondo sur un th&egrave;me de l&rsquo;op&eacute;ra
              &bdquo;Zalmira&rdquo; de Rossini, pour piano,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 20,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1824,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.32.%20Rondo%20sur%20un%20th%C3%A8me%20de%20l%E2%80%99op%C3%A9ra%20%E2%80%9EZalmira%E2%80%9D%20op.%2020%2C(330-359)%20obraz%20263-270.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.33.</span>{' '}
          <span className="composition-title">
            <em>Mazur et Galoppe,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 21,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-me Caroline ...bowska n&eacute;e de Balewska</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.34.</span>{' '}
          <span className="composition-title">
            <em>Musique pour les amusements des danses,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 22</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.35.</span>{' '}
          <span className="composition-title">
            <em>Musique pour les amusements des danses,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 23</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.36.</span>{' '}
          <span className="composition-title">
            <em>
              Fantaisie sur les th&egrave;mes de l&rsquo;op&eacute;ra &bdquo;Il
              Graciono&rdquo; de Meyerbeer,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 24,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1837</em>
          </span>{' '}
          <sup className="composition-sources">2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.37.</span>{' '}
          <span className="composition-title">
            <em>
              M&eacute;lange tir&eacute; de l&rsquo;op&eacute;ra &bdquo;Fra
              Diavolo&rdquo;,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 25</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.38.</span>{' '}
          <span className="composition-title">
            <em>L&rsquo;agr&eacute;ment du Carnaval,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 27,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Es-Dur, A-Dur, D-Dur, D-Dur, c-Moll, F-Dur, 1858</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.39.</span>{' '}
          <span className="composition-title">
            <em>Lwowianka, mazur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 27,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;d. &agrave; M. Vincent Daner</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.40.</span>{' '}
          <span className="composition-title">
            <em>Polonaise, compos&eacute;e a Husiatyne en Pologne,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1840,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.41.</span>{' '}
          <span className="composition-title">
            <em>
              Lieblings-Mazuren Ihrer Majest&auml;t der Kaiserin von Russland.
            </em>
          </span>{' '}
          <sup className="composition-sources">7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.42.</span>{' '}
          <span className="composition-title">
            <em>Mazurka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 28,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano &agrave; M-me Comtesse Haeltenschmidt (?)</em>
          </span>{' '}
          <sup className="composition-sources">2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.43.</span>{' '}
          <span className="composition-title">
            <em>
              M&eacute;lange sur diff&eacute;rentes Th&egrave;mes Polonais pour
              Piano Forte &agrave; 8 mains,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 29</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.43.c.%20M%C3%A9lange%20%C3%A0%208%20mains%2C%20op.%20291(280-329)%20obraz%20335-(brak%20str.350)-366%2Crkp.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-version-note">({t`ms`}.)</span>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.43.d.%20Melange%20op.%2029%2C%20druk.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>{' '}
          <span className="composition-version-note">({t`print`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.44.</span>{' '}
          <span className="composition-title">
            <em>Duo &agrave; 8 mains ou pour 4, piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 29,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.45.</span>{' '}
          <span className="composition-title">
            <em>Rondo de concert pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 30</em>
          </span>{' '}
          <sup className="composition-sources">3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.45.%20Rondo%20de%20concert%20pour%20piano%2C%20op.%2030%20%28330-359%29%20obraz%20305-309.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.46.</span>{' '}
          <span className="composition-title">
            <em>Variations sur une Walse,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 30,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1838</em>
          </span>{' '}
          <sup className="composition-sources">2, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.46.a.%20Variations%20sur%20une%20Walse%20op.%2030.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.46.b.%20Variations%20sur%20une%20Walse%20Op.%2030%20Marie%20Kratter%20BN%20obr.1-22.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.47.</span>{' '}
          <span className="composition-title">
            <em>
              Poutpourri tir&eacute;e de l&rsquo;op&eacute;ra
              &bdquo;Belizario&rdquo; par Donizetti,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 30,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1863,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.47.a.%20Poutpourri%20tir%C3%A9e%20de%20l%E2%80%99op%C3%A9ra%20%E2%80%9EBelizario%E2%80%9D%20par%20Donizetti%2C%20op.%2030%20(280-329)%20obraz539-547.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.47.b.%20Poutpourri%20tir%C3%A9e%20de%20l%E2%80%99op%C3%A9ra%20%E2%80%9EBelizario%E2%80%9D%20par%20Donizetti%2C%20op.%2030%20(280-329)%20obraz%20548-558.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.48.</span>{' '}
          <span className="composition-title">
            <em>Mazurka et 6 quadrilles,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 31,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-me la comtesse Julie G&#322;ogowska</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.49.</span>{' '}
          <span className="composition-title">
            <em>Variations sur un th&egrave;me original pour le pianoforte,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 32,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1836</em>
          </span>{' '}
          <sup className="composition-sources">2, 4, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.49.%20Variations%20op.%2032.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.50.</span>{' '}
          <span className="composition-title">
            <em>
              Variations sur un th&egrave;me de l&rsquo;op&eacute;ra
              &bdquo;Norma&rdquo; de Bellini,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 33,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Februar 1837</em>
          </span>{' '}
          <sup className="composition-sources">2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.51.</span>{' '}
          <span className="composition-title">
            <em>Air Polonais vari&eacute;,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 34,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-me la comtesse Leonore Karwicka, 1836</em>
          </span>{' '}
          <sup className="composition-sources">2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.52.</span>{' '}
          <span className="composition-title">
            <em>Souvenir de Bellini,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 35,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-lle la comtesse Justine Markowska, 1836</em>
          </span>{' '}
          <sup className="composition-sources">2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.53.</span>{' '}
          <span className="composition-title">
            <em>Souvenir de Hugenots de Meyerbeer,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 36,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Phantasie, 1837</em>
          </span>{' '}
          <sup className="composition-sources">2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.54.</span>{' '}
          <span className="composition-title">
            <em>
              Pr&eacute;lude et Pri&egrave;re pour l&rsquo;orgue ou piano,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 36,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; son ami M-sieur Victor de Sellyey,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.54.%20Pr%C3%A9lude%20et%20Pri%C3%A8re%20pour%20l%E2%80%99orgue%20ou%20piano%2C%20op.%2036%20(366-368)obraz187-190.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.55.</span>{' '}
          <span className="composition-title">
            <em>Beaut&eacute;s de &bdquo;Huguenots&rdquo; de Meyerbeer,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 37,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.56.</span>{' '}
          <span className="composition-title">
            <em>Fantasie ou Potpourri,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 38,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1838</em>
          </span>{' '}
          <sup className="composition-sources">2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.57.</span>{' '}
          <span className="composition-title">
            <em>9 Mazur&oacute;w,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 39,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              d&eacute;d. &agrave; M-me Honorie de Komorowska n&eacute;e
              comtesse Chotoniewska
            </em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.58.a.</span>{' '}
          <span className="composition-title">
            <em>
              Ouvertur zur komischen Oper &bdquo;Der Doctor und
              Apotheker&rdquo;,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 40,</em>
          </span>{' '}
          <span className="composition-description">
            <em>zu 4 h&auml;nde,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.58.a.%20Ouvertur%20zur%20komischen%20Oper%20%E2%80%9EDer%20Doctor%20und%20Apotheker%E2%80%9D%2C%20op.%204040(280-329)%20obraz%20470-480.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.58.b.</span>{' '}
          <span className="composition-title">
            <em>
              Ouvertur de L&rsquo;Opera &ldquo;L&rsquo;docteur et
              Pharmacien&rdquo; a 4 mains,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 40</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.58.a.%20Ouvertur%20zur%20komischen%20Oper%20%E2%80%9EDer%20Doctor%20und%20Apotheker%E2%80%9D%2C%20op.%2040%20(280-329)%20obraz%20481-495.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.59.</span>{' '}
          <span className="composition-title">
            <em>6 Quadrilles na piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 40,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-me Amalie Eder</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.60.</span>{' '}
          <span className="composition-title">
            <em>Concertus ....pour le piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 40</em>
          </span>{' '}
          <sup className="composition-sources">4</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.61.</span>{' '}
          <span className="composition-title">
            <em>3 Mazures,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; Mons. Fr. Chopin</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            (op. 43 <sup className="composition-sources">2</sup>?)
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.62.</span>{' '}
          <span className="composition-title">
            <em>Polonaise et 3 mazures,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 42</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.63.</span>{' '}
          <span className="composition-title">
            <em>3 Mazures et 6 Quadrilles,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 45</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.63.%203%20Mazures%20et%206%20quadrilles%20Op.45.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.64.</span>{' '}
          <span className="composition-title">
            <em>Cantus Firmus,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 45,</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.64.%20Cantus%20Firmus%2C%20op.%2045%20(330-359)%20obraz%20021-024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            (
            {t`with double counterpoint for 3 voices, 1860, "musical curiosum"`}
            )
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.65.</span>{' '}
          <span className="composition-title">
            <em>3 stimiger Canon in strangen Stil,</em>
          </span>{' '}
          <span className="composition-description">
            <em>25 Nov. 1865,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.65.%203%20Stiminger%20Canon%20(366-368)%20obr.%20274-275.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.66.</span>{' '}
          <span className="composition-title">
            <em>&bdquo;Pod gwiazdami&rdquo;,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 46</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.67.</span>{' '}
          <span className="composition-title">
            <em>Nocturne,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 47,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              fortep. d&eacute;di&eacute; &agrave; mon ami, Artur G&#322;ogowski
            </em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.68.</span>{' '}
          <span className="composition-title">
            <em>
              3 Fuges en mi- mineur, re- mineur et mi- mineur et cantus firmus,
              contrepoint &agrave; 3 voix pour piano,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 48,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; son ami Monsieur Francois Candella</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.68.%203%20Fuges%20op.48%20(280-329)%20obraz%20028b-033a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.69.</span>{' '}
          <span className="composition-title">
            <em>Marche fun&egrave;bre pour le pianoforte,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 48,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Souvenir &agrave; Th. Wis&#769;niowski</em>
          </span>{' '}
          <sup className="composition-sources">2, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.69.%20Marche%20Funebre%20op.%2048.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.70.</span>{' '}
          <span className="composition-title">
            <em>Andante pour le pianoforte As-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 48,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.70.%20Andante%20op.48%20%28330-359%29%20obraz%20026-038.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.71.</span>{' '}
          <span className="composition-title">
            <em>Scherzo</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 50,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.71.%20Scherzo%20op.%2050%20%28330-359%29%20obraz%20039b-048a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.72.</span>{' '}
          <span className="composition-title">
            <em>
              Souvenir de l&rsquo;op&eacute;ra &bdquo;Mina&rdquo; de Thomas,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 49,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;d. &agrave; M-me Victorine de Vassilka</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.73.</span>{' '}
          <span className="composition-title">
            <em>Fuga en sol-mineur pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 50,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-sieur Jacques de Kobervein,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.74.</span>{' '}
          <span className="composition-title">
            <em>
              Sentiments d&rsquo;enthousiasme de la Galicie pour les
              m&eacute;morables journ&eacute;es d&rsquo;octobre de 1851,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 50</em>
          </span>{' '}
          <sup className="composition-sources">5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.74.%20Sentiments%20op.50.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.75.</span>{' '}
          <span className="composition-title">
            <em>Canon &agrave; deux voix pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 50,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.76.</span>{' '}
          <span className="composition-title">
            <em>5 valses, 2 mazures et une polka pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 51</em>
          </span>{' '}
          <sup className="composition-sources">2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.76.%205%20Valses%2C%202%20Mazures%20et%20une%20Polka%20op.%2051.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.77.</span>{' '}
          <span className="composition-title">
            <em>
              Quadrilles sur des airs favoris de l&rsquo;op&eacute;ra
              &bdquo;Indra&rdquo; de Flotow,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 52</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.78.</span>{' '}
          <span className="composition-title">
            <em>Penices romans sans paroles,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 53,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;d. &agrave; M-lle Olga de Zawadzka</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.79.</span>{' '}
          <span className="composition-title">
            <em>3 mazures,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 54,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; son ami Edmond Juristowski</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.80.</span>{' '}
          <span className="composition-title">
            <em>Fuga in 4 parties ... pour le Piano Forte,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 54</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.80.%20Fuga%20in%204%20parties%20op.54%20(280-329)%20obraz%20015-019.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.81.</span>{' '}
          <span className="composition-title">
            <em>Fuga &agrave; 3 parties en mi-maieur, pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 55,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.81.%20Fuga%20%C3%A0%203%20parties%20op.55%20(280-329)%20obraz%20022b-024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.82.</span>{' '}
          <span className="composition-title">
            <em>Mazur &agrave; 6 mains D-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 56</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.82.%20Mazur%20%C3%A0%206%20mains%2C%20op.%2056%20(280-329)%20obraz%20298-305.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.83.</span>{' '}
          <span className="composition-title">
            <em>Grande marche pour le piano, No 6,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 56</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.83.a.%20Grande%20marche%2C%20op.%2056%20(330-359)%20obraz%20068-072.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.83.b.%20Grande%20Marche%20No%206%2C%20op.%2056%20(280-329)%20obr.%20068-070.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`manuscript pages numbered from page ${20}?`})
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.84.</span>{' '}
          <span className="composition-title">
            <em>&bdquo;Souvenir de Korczyn&rdquo;,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 57,</em>
          </span>{' '}
          <span className="composition-description">
            <em>dans les Karpathes, Mazur</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.85.</span>{' '}
          <span className="composition-title">
            <em>Szamszurka &ndash; polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 58</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.85.b.%20Polka%20-%20Szamszurka%20op.104%20(280-329)%20obraz%20526-528.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <span className="composition-version-note">(a 4 mains, op. 104)</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.86.</span>{' '}
          <span className="composition-title">
            <em>Polka &ndash; mazurka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 59</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.87.</span>{' '}
          <span className="composition-title">
            <em>Impromptu,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 59</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.88.</span>{' '}
          <span className="composition-title">
            <em>
              Cavatina et andante de l&rsquo;op&eacute;ra &bdquo;Zalmira&rdquo;
              &agrave; 4 mains,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 59,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.89.</span>{' '}
          <span className="composition-title">
            <em>Frantzl &ndash; Polka et Mazur tremblante,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 59,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano &agrave; M-me Rose de Dobrzycka, 1859,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.89.%20Frantzl%20%E2%80%93%20Polka%20et%20Mazur%20tremblante%2C%20op.%2059%20(280-329)%20obraz%20013-014.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.90.</span>{' '}
          <span className="composition-title">
            <em>Mazurca de salon,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 60</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.90.%20Mazurca%20de%20salon%2C%20op.%2060%20(366-368)obraz218-222.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.91.</span>{' '}
          <span className="composition-title">
            <em>Polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 61,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; M-lle Maria Lewakowski</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.92.</span>{' '}
          <span className="composition-title">
            <em>Mazurka pour le piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 62</em>
          </span>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.92.%20Mazurka%20pour%20le%20piano%2C%20op.%2062.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.93.</span>{' '}
          <span className="composition-title">
            <em>Fleurs de Korczyn, Quadrilles pour le piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 63</em>
          </span>{' '}
          <sup className="composition-sources">2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.93.%20Fleurs%20de%20Korczyn%2C%20op.%2063.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.94.</span>{' '}
          <span className="composition-title">
            <em>Ouverture de m&eacute;lodrama &bdquo;Le Sauveur&rdquo;,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 63,</em>
          </span>{' '}
          <span className="composition-description">
            <em>arrang&eacute;e pour piano &agrave; 4 mains,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.94.c.%20%28330-359%29%20obraz%20439%20ok%C5%82adka.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          (<span className="composition-version-note">{t`cover only`}</span>),{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.94.d.%20%28330-359%29%20obraz%20001%20strona%20tytu%C5%82owa.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          (
          <span className="composition-version-note">
            {t`title page`} (op. 53!?)
          </span>
          ),{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.94.e.%20%28280-329%29%20obraz496-%28brak%20506%2C507%2C%20tj.%20str.20-21%2C%2022-23%20rkp.%29-509.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          (
          <span className="composition-version-note">
            {t`missing pages`} 20-21, 22-23 {t`ms`}.
          </span>
          ), (<span className="composition-version-note">op. 53!?</span>),{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.94.f.%20Ouverture%20de%20melodrama%20_Le%20Sauveur_%2C%20op.36%20%28330-359%29%20obraz%20002-013%2C%20kompletny.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          (<span className="composition-version-note">op.36!?</span>)
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.95.</span>{' '}
          <span className="composition-title">
            <em>
              Grande Ouverture pour grande Orchestre, arrangee pour piano a 4
              mains,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 63,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.95.%20Grande%20Ouverture%20a%204%20mains%2C%20op.63%20%28366-368%29obraz516-537.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`see also`} A.12, {t`version for orchestra`})
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.96.</span>{' '}
          <span className="composition-title">
            <em>Une fleur de salon &ndash; Impromptu-valse,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 64,</em>
          </span>{' '}
          <span className="composition-description">
            <em>d&eacute;d. &agrave; M-sieur Antoine Kocipin&#769;ski</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.97.</span>{' '}
          <span className="composition-title">
            <em>Grande marche pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 64,</em>
          </span>{' '}
          <span className="composition-description">
            <em>au Corps des Officiers du Regiment Nr. 65</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.97.%20Grande%20marche%20pour%20piano%2C%20op.%2064%20%28280-329%29%20obraz%20071-073.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.98.</span>{' '}
          <span className="composition-title">
            <em>4-ti&egrave;me fuge &agrave; 3 voix pour pianoforte,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 64,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.98.%204-ti%C3%A8me%20fuge%20%C3%A0%203%20voix%2C%20op.%2064%20(280-329)%20obraz%20025-028a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.99.</span>{' '}
          <span className="composition-title">
            <em>Grande ouverture</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 65 (?),</em>
          </span>{' '}
          <span className="composition-description">
            <em>pour grand orchestre, arrang&eacute;e pour 4 mains, piano,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            (
            {t`Overture for the opening of the Skarbkowski Theater, composed in Korczyn in August 1856`}
            )
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.100.</span>{' '}
          <span className="composition-title">
            <em>4 Mazurka &eacute;l&eacute;gante, piano, B-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 65,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&agrave; son ami le Chevalier Marcelle Madeyski,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.100.%204%20Mazurka%20%C3%A9l%C3%A9gante%2C%20op.%2065(280-329)%20obraz315b-322a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.101.</span>{' '}
          <span className="composition-title">
            <em>Impromptu, sc&egrave;ne dramatique pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 65,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1861,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.101.a.%20Impromptu%2C%20sc%C3%A8ne%20dramatique%20pour%20piano%2C%20op.%2065.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>{' '}
          <span className="composition-version-note">({t`print`})</span>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.101.b.%20Impromptu%2C%20op.%2065(366-368)%20obraz%20555-559a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-version-note">({t`ms`}.)</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.102.</span>{' '}
          <span className="composition-title">
            <em>Souvenir des Karpathes,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 65</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.102.%20Souvenir%20des%20Karpathes%2C%20op.%2065%20(366-368)obraz%20269b-273.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.103.</span>{' '}
          <span className="composition-title">
            <em>Cavatine pour piano</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <span className="composition-opus">
            <em>op. 66</em>
          </span>{' '}
          <sup className="composition-sources">2, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.103.%20Cavatine%20op.66.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.104.</span>{' '}
          <span className="composition-title">
            <em>Souvenir de Chervitschesti, 6 Quadrilles pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 66,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.104.%20Souvenir%20de%20Chervitchesti%2C%20op.66%20(366-368)obraz225-229.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.105.</span>{' '}
          <span className="composition-title">
            <em>Souvenir de belles Dames de Dombrowa, Polka Nr.4,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.105.%20Souvenir%20de%20belles%20Dames%20de%20Dombrowa%2C%20Polka%20Nr.4%20(366-368)%20obraz%20223-224.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.106.</span>{' '}
          <span className="composition-title">
            <em>Reconaisence &ndash; Polka No.5,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 67</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>
        </div>
        <div className="composition-details">
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.105.1.%20Johannis%20Brunn%20et%20Stefanie%20Polka%20No.11%2C12%2C%20Op.%2067%20(366-368)obraz%20574-576.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <em>Johannis Brunn et Stefanie Polka No.11,12, Op. 67</em>{' '}
          <sup className="composition-sources">3</sup>
          <br />
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.106.2.%20Polka%20No%202%20(366-368)%20obr.%20316-317.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <em>Helene Polka No 2</em>{' '}
          <sup className="composition-sources">3</sup>
          <br />
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.106.4.%20Polka%20No%204%20(366-368)%20obr.%20318-319.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <em>Polka No 4</em> <sup className="composition-sources">3</sup>
          <br />
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.106.5.%20Reconaisence%20%20Polka%20No%205(366-368)obraz095-097.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <em>Reconaisence Polka No 5</em>{' '}
          <sup className="composition-sources">3</sup>
          <br />
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.106.6.%20Jeanne%20Polka%20No%206%20(366-368)%20obr.%20313-314.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <em>Jenne Polka No 6</em> <sup className="composition-sources">3</sup>
          <br />
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.106.7.%20Emilie%20Polka%20No%207%20(366-368)%20obraz%20315.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <em>Polka No 7</em> <sup className="composition-sources">3</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.107.</span>{' '}
          <span className="composition-title">
            <em>3 Polka</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 67</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.107.%20%203%20Polka%20op.%2067%20(280-329)%20obraz%20522-525.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.108.</span>{' '}
          <span className="composition-title">
            <em>Jeanette &ndash; Polka, Nr. 8</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.108.%20Jeanette%20%E2%80%93%20Polka%2C%20Nr.%208%20(366-368)%20obraz%20572.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.109.</span>{' '}
          <span className="composition-title">
            <em>&ldquo;Qui ne s&rsquo;oublie pas&rdquo; Polka Nr. 16</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.109.%20%E2%80%9CQui%20ne%20s%E2%80%99oublie%20pas%E2%80%9D%20Polka%20Nr.%2016%20(366-368)obraz%20093-094.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.110.</span>{' '}
          <span className="composition-title">
            <em>Raoul &ndash; polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 67</em>
          </span>{' '}
          <sup className="composition-sources">2, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.110.%20Raoul-Polka%20Op.%2067.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.111.</span>{' '}
          <span className="composition-title">
            <em>Les plus beaux yeux: m&eacute;lodie de Stigelli,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 67,</em>
          </span>{' '}
          <span className="composition-description">
            <em>ca 1885 (???)</em>
          </span>{' '}
          <sup className="composition-sources">6</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.112.</span>{' '}
          <span className="composition-title">
            <em>Le Tra&icirc;nage, polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 68</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.113.</span>{' '}
          <span className="composition-title">
            <em>Grande polonaise A-moll,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 68</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.114.</span>{' '}
          <span className="composition-title">
            <em>
              7 mazur&oacute;w na korzys&#769;c&#769; Zak&#322;adu
              G&#322;uchoniemych,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 69</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.115.</span>{' '}
          <span className="composition-title">
            <em>Canon</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 69,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.116.</span>{' '}
          <span className="composition-title">
            <em>Nocturno pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 70</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.116.a.%20Nocturno%20Op.70.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>{' '}
          <span className="composition-version-note">({t`print`})</span>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.116.b.%20Nocturno%20op.70%20(330-359)%20obraz%20430-432.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-version-note">({t`ms`}.)</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.117.</span>{' '}
          <span className="composition-title">
            <em>Souvenir de Miroslawa,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 71,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1) Scherzo 2) Mon desir, 1862</em>
          </span>{' '}
          <sup className="composition-sources">2, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.117.%20Souvenir%20de%20Miroslawa%20Op.71.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.118.</span>{' '}
          <span className="composition-title">
            <em>4-me Etude pour Piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 71,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.119.</span>{' '}
          <span className="composition-title">
            <em>6 Etudes pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 72,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.120.</span>{' '}
          <span className="composition-title">
            <em>Le dernier des hussards, r&ecirc;verie,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 72</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 5, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.120.%20Le%20Dernier%20des%20Hussards%20Oeuvre%2072.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.121.</span>{' '}
          <span className="composition-title">
            <em>
              Olla Potrida - Contredanses Tir&eacute;es de l&rsquo;op&eacute;ra
              Stradella et le Cheval de Bronze&rdquo;,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 73,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              &agrave; M-lle la comt. S&eacute;v&eacute;rine Siemin&#769;ska
            </em>
          </span>{' '}
          <sup className="composition-sources">2, 8</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.121.%20Olla_Potrida_op.73%2C%20BJ.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.122.</span>{' '}
          <span className="composition-title">
            <em>Valse brillante, A-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 73,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.122.%20Valse%20brillante%2C%20op.73(366-368)obraz286-290.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.123.</span>{' '}
          <span className="composition-title">
            <em>6 Etudes pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 73,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.124.</span>{' '}
          <span className="composition-title">
            <em>2 Etudes pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 74,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.125.</span>{' '}
          <span className="composition-title">
            <em>
              Souvenir des Karpathes, Pens&eacute;es megoriques et nationales,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 74,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.125.%20Souvenir%20des%20Karpathes%2C%20op.74%20(366-368)obraz%20265-269a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.126.</span>{' '}
          <span className="composition-title">
            <em>Fleurs Roumaines,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 75,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Transcription pour le piano</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber,</span>{' '}
          <span className="composition-description">
            <em>1863</em>
          </span>{' '}
          <sup className="composition-sources">1, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.126.%20Fleurs%20Roumaines%2C%20op.%2075%20(280-329)%20obraz%2005-012.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.127.</span>{' '}
          <span className="composition-title">
            <em>Marche Favorite Vari&eacute;e Pour Le Pianoforte a 4 Mains,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>Op. 75</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.127.%20Marche%20Favorite%20%20a%204%20Mains%2C%20Op.75%20(280-329)%20obraz%20270-278.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.128.</span>{' '}
          <span className="composition-title">
            <em>Mazurka pour le piano &agrave; 4 mains C-Dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 75,</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.128.%20Mazurka%20%C3%A0%204%20mains%2C%20op.75%20(280-329)%20obraz322b-327a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.129.</span>{' '}
          <span className="composition-title">
            <em>Salut &agrave; la Roumanie,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 76,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.129.%20Salut%20a%20la%20Roumanie%2C%20op.76%20(280-329)%20obraz%2004%2C%20tylko%20ok%C5%82adka.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-version-note">({t`cover only`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.130.</span>{' '}
          <span className="composition-title">
            <em>Pens&eacute;e fugitive, souvenir de Skee, B-Dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 76,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.130.%20Pens%C3%A9e%20fugitive%2C%20op.76%20(280-329)%20obraz516-521.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.131.</span>{' '}
          <span className="composition-title">
            <em>Le dernier r&ecirc;verie de Hussard,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 76</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.132.</span>{' '}
          <span className="composition-title">
            <em>Mondnacht auf der Alpe, H-Dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 77</em>
          </span>{' '}
          <sup className="composition-sources">1, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.132.%20Mondnacht%20auf%20der%20Alpe%2C%20op.77%20(280-329)%20obraz419-423a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.133.</span>{' '}
          <span className="composition-title">
            <em>Suite des masures pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 77</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.133.%20Suite%20des%20masures%20pour%20piano%2C%20op.%2077%20(366-368)%20obraz%20276-279.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.134.</span>{' '}
          <span className="composition-title">
            <em>Nachtfahrt um K&ouml;nigssee, nocturne,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 78,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.134.%20Nachtfahrt%20um%20K%C3%B6nigssee%2C%20op.%2078%20(280-329)%20obraz%20423b-426.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.135.</span>{' '}
          <span className="composition-title">
            <em>
              Doppel Fuge im 4 stimmigen Kontrapunkt f&uuml;r Piano oder Orgel
              zu 4 H&auml;nde,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 78,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1863,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.136.</span>{' '}
          <span className="composition-title">
            <em>4-&egrave;me mazurka de salon, pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 78,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.136.a.%20Mazurka%20de%20Salon%20a%204%20mains%2C%20op.%2078%20(280-329)%20obr.%20310-315a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.136.b.%204-%C3%A8me%20mazurka%20de%20salon%2C%20op.78%20(330-359)%20obraz%20310-320.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.137.</span>{' '}
          <span className="composition-title">
            <em>Nachtfahrt,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 79</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.137.%20Nachtfahrt%2C%20op.%2079%20(280-329)%20obraz%20427-430.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.138.</span>{' '}
          <span className="composition-title">
            <em>Mazurka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 79</em>
          </span>{' '}
          <sup className="composition-sources">2, 8</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.138.%20Mazurka%20op.79%2C%20BJ.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.139.</span>{' '}
          <span className="composition-title">
            <em>Pauline-polka pour piano, Nr 10,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 79,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.139.a.%20Pauline-polka%20pour%20piano%2C%20Nr%2010%2C%20op.%2079%20(280-329)%20obraz%20510-512.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.139.b.%20Pauline-polka%20pour%20piano%2C%20Nr%2010%2C%20op.%2079%20(280-329)%20obraz%20513-515.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.140.</span>{' '}
          <span className="composition-title">
            <em>Ernst&ndash;polka, Victor &ndash; Polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 79,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.140.%20Ernst%E2%80%93polka%2C%20Victor%20%E2%80%93%20Polka%2C%20op.%2079%20(366-368)%20obraz%20320-322.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.141.</span>{' '}
          <span className="composition-title">
            <em>Bertha &ndash; polka,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 79,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.142.</span>{' '}
          <span className="composition-title">
            <em>La fid&egrave;le Jeanette, polka, No 8,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 79,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.142.%20La%20fidele%20Jeanette%2C%20polka%20no%208%2C%20op.79%20(366-368)%20obraz%20573.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <span className="composition-version-note">
            ({t`only title page`})
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.143.</span>{' '}
          <span className="composition-title">
            <em>
              Marche de l&rsquo;op&eacute;ra &ldquo;Mois&eacute;e&rdquo; par
              Rossini,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 79,</em>
          </span>{' '}
          <span className="composition-description">
            <em>transcrit pour le piano</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.143.%20Marche%20de%20l%E2%80%99op%C3%A9ra%20%E2%80%9CMois%C3%A9e%E2%80%9D%20par%20Rossini%2C%20op.79%20(280-329)%20obraz%20264-269.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.144.</span>{' '}
          <span className="composition-title">
            <em>
              Andante interrompue par une marche fun&egrave;bre pour piano,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 80,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1862</em>
          </span>{' '}
          <sup className="composition-sources">2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.144.%20Andante%20par%20Marche%20Funebre%20op.80.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.145.</span>{' '}
          <span className="composition-title">
            <em>Marche Funebre</em>
          </span>{' '}
          <sup className="composition-sources">8</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.145.%20Marche%20Funabre%20BJ.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.146.</span>{' '}
          <span className="composition-title">
            <em>Souvenir des bords du Sereth.</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 81,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Valse avec Coda, &agrave; 4 mains,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.146.%20Souvenir%20des%20bords%20du%20Sereth.%20op.%2081(366-368)obraz247-264.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.147.</span>{' '}
          <span className="composition-title">
            <em>Fuga ........,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 82</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.147.%20Fuga%20..%2C%20op.%2082%20(280-329)%20obraz%20020-022a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.148.</span>{' '}
          <span className="composition-title">
            <em>Esmeralde &ndash; mazurka &eacute;l&eacute;gante, Es-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 83,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.149.</span>{' '}
          <span className="composition-title">
            <em>&bdquo;Mimi&rdquo; valse brillante, pour piano, A-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 84,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.149.%20%E2%80%9EMimi%E2%80%9D%20valse%20brillante%2C%20op.%2084(280-329)%20obraz%20389-393.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.150.</span>{' '}
          <span className="composition-title">
            <em>
              Au G&eacute;n&eacute;ral Garibaldi grande marche &agrave; 4 mains,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 84,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.150.%20Au%20G%C3%A9n%C3%A9ral%20Garibaldi%20grande%20marche%20%C3%A0%204%20mains%2C%20op.%2084%20(280-329)%20obraz%20033b-034.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.151.</span>{' '}
          <span className="composition-title">
            <em>3 Marches &agrave; 4 mains,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 84,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.151.%203%20Marches%20%C3%A0%204%20mains%2C%20op.%2084%20(280-329)%20obraz%20286-292.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.152.1.</span>{' '}
          <span className="composition-title">
            <em>
              Souvenir de bords de la Moldawa, suite des valses pour piano,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 85,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.152.1.a.%20Souvenir%20de%20bords%20de%20la%20Moldawa%20suite%20des%20valses%20pour%20piano%2C%20op.%2085.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.152.1.b.%20Souvenir%20de%20bords%20de%20la%20Moldawa%20suit%20de%20valse%20pour%20piano%2C%20op.%2085%20(366-368)%20obraz%20230-236.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">3</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.152.2.</span>{' '}
          <span className="composition-title">
            <em>Souvenir des Bords de la Moldova, Suite de Valses,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 85,</em>
          </span>{' '}
          <span className="composition-description">
            <em>a 4 Mains,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.152.2.%20Souvenir%20des%20Bords%20de%20la%20Moldova%2C%20op.%2085%20a%204%20mains%20(366-368)obraz237-246.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.153.</span>{' '}
          <span className="composition-title">
            <em>Le songe, Fantaisie dramatique pour piano Des-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 87,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.153.%20Le%20songe%2C%20op.%2087%20(366-368)%20obraz%20207-217.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.154a.</span>{' '}
          <span className="composition-title">
            <em>3 Lieder ohne Worte f&uuml;r Piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 88,</em>
          </span>{' '}
          <span className="composition-description">
            <em>a) Dumka b) Unruhe c) Venezianisches Gondollied</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.154.a.%203%20Lieder%20ohne%20Worte%20f%C3%BCr%20Piano%2C%20op.%2088%20(280-329)%20obraz%20242-248.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.154b.</span>{' '}
          <span className="composition-title">
            <em>3 Romance sans paroles pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 88,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              1) Chor der Studenten 2) Chor der Nonnen und M&ouml;nche 3) Chor
              der Krieger,
            </em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.154.b.%203%20Romance%20sans%20paroles%20Op.88%20(366-368)%20obr.%20082-089%2C%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.154c.</span>{' '}
          <span className="composition-title">
            <em>6 Lieder ohne Worte f&uuml;r Piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 88</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.154.c.%206%20Lieder%20ohne%20Worte%20f%C3%BCr%20Piano%2C%20op.%2088%20(280-329)%20obraz%20249-263.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          <em>a) Dumka</em>
          <br />
          <em>b) Unruhe</em>
          <br />
          <em>c) Venezianisches Gondel Lied</em>
          <br />
          <em>d) Gesang der Krieger</em>
          <br />
          <em>e) M&ouml;nch und Nonnen Chor</em>
          <br />
          <em>f) Schwedisches Burschenlied</em>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.155.</span>{' '}
          <span className="composition-title">
            <em>Sonate pour piano, Es-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 89,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.155.a.%20(330-359)%20obraz%20242-251.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.155.b.%20Sonate%20pour%20le%20piano%2C%20op.%2089%20(330-359)%20obr.%20252-262.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">({t`see also`} H.33)</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.156.</span>{' '}
          <span className="composition-title">
            <em>Nocturne Es-Dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 90</em>
          </span>{' '}
          <sup className="composition-sources">3, 4, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.156.b.%20Nocturne%20Es-dur%20op.90%2C%20oczyszczony.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.157.</span>{' '}
          <span className="composition-title">
            <em>3-me Sonate du 2-de Quatuor transcript pour piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 91,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1864,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.158.</span>{' '}
          <span className="composition-title">
            <em>Chanson polonais populaire,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 91,</em>
          </span>{' '}
          <span className="composition-description">
            <em>pour piano transcript</em>
          </span>{' '}
          <span className="composition-author">par Jean Ruckgaber</span>{' '}
          <sup className="composition-sources">2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.158.%20Chanson%20polonais%20populaire%2C%20op.%2091.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <sup className="composition-sources">5</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.159.</span>{' '}
          <span className="composition-title">
            <em>Mazur, B-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 104,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.159.%20Mazur%2C%20B-dur%2C%20op.%20104%20(280-329)%20obraz%20306-309.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.160.</span>{' '}
          <span className="composition-title">
            <em>Rondo fantastique pour piano, As-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 104,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.161.</span>{' '}
          <span className="composition-title">
            <em>Pr&eacute;ludes dans toutes les tons de Major et Mi-mineur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 104,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1873,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.161.a.%20Preludes%20(366-368)%20obraz%20163-173.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.161.b.%20Pr%C3%A9ludes%20op.%20104%20(366-368)%20obraz%20174-186.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.162.</span>{' '}
          <span className="composition-title">
            <em>Szenen aus den 4 Jahreszeiten,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 123</em>
          </span>{' '}
          <sup className="composition-sources">7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.163a.</span>{' '}
          <span className="composition-title">
            <em>
              1ste Lieblings-Mazur Ihrer Majest&auml;t der Kaiserin von Russland
            </em>
          </span>{' '}
          <sup className="composition-sources">7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.163b.</span>{' '}
          <span className="composition-title">
            <em>
              2te Lieblings-Mazur Ihrer Majest&auml;t der Kaiserin von Russland,
            </em>
          </span>{' '}
          <span className="composition-description">
            <em>zu 4 H&auml;nden, 1840</em>
          </span>{' '}
          <sup className="composition-sources">7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.163c.</span>{' '}
          <span className="composition-title">
            <em>
              3te Lieblings-Mazur Ihrer Majest&auml;t der Kaiserin von Russland,
            </em>
          </span>{' '}
          <span className="composition-description">
            <em>zu 4 H&auml;nden, 1840</em>
          </span>{' '}
          <sup className="composition-sources">7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.164.</span>{' '}
          <span className="composition-title">
            <em>Marche hongroise pour le piano, No 4,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.164.%20Marche%20hongroise.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.165.</span>{' '}
          <span className="composition-title">
            <em>2 masures et une march</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.165.%202%20masures%20et%20une%20marche%20(280-329)%20obr.%20293-295.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.166.</span>{' '}
          <span className="composition-title">
            <em>Mazurka pour piano</em>
          </span>{' '}
          <span className="composition-description">
            <em>Marie Schier, 1869,</em>
          </span>{' '}
          <sup className="composition-sources">8</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.166.%20Mazurka%2C%20BJ.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.167.</span>{' '}
          <span className="composition-title">
            <em>M&eacute;lodies Valaques Roumania A-moll,</em>
          </span>{' '}
          <span className="composition-description">
            <em>1863,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.167.%20M%C3%A9lodies%20Valaques%20Roumania%20(280-329)%20obraz%20382-388.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">C.168.</span>{' '}
          <span className="composition-title">
            <em>Notezen Buch,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/C.168.%20Notezen%20Buch%20(280-329)%20obraz435-461.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <a className="section-ref" id="section-D" />
      <Typography variant="h3" gutterBottom>
        D. {t`Music for violin and piano`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">D.1.</span>{' '}
          <span className="composition-title">
            <em>Variations sur un th&egrave;me original,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 32</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/D.1.%20Variations%20sur%20un%20theme%20original%2C%20op.32%2C%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">D.2.</span>{' '}
          <span className="composition-title">
            <em>Duo pour piano et violon,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 34</em>
          </span>{' '}
          <sup className="composition-sources">2, 9</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">D.3.</span>{' '}
          <span className="composition-title">
            <em>Duo pour piano et violon,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 41</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/D.3.%20Divertissement%20%20Op.%2041.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-version-note">
            <em>Divertissiment, violin, op.41</em>
          </span>{' '}
          <sup className="composition-sources">5</sup>,{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/D.3a%20Duo%20Op.41%20Divertissement%20Sacher%20Masoch.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          ,{' '}
          <span className="composition-version-note">
            <em>Duo Op.41, Divertissement, dedie Leopold de Sacher Masoch</em>
          </span>{' '}
          <sup className="composition-sources">5</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">D.4.</span>{' '}
          <span className="composition-title">
            <em>Duo,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 44</em>
          </span>{' '}
          <sup className="composition-sources">1</sup>
        </div>
      </div>
      <div className="composition-entry-spacer"></div>
      <a className="section-ref" id="section-E" />
      <Typography variant="h3" gutterBottom>
        E. {t`Music for flute, czakan and piano`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">E.1.</span>{' '}
          <span className="composition-title">
            <em>Fantaisie pour Czakan et Piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 33</em>
          </span>{' '}
          <sup className="composition-sources">9</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/E.1%2C2%20Fantasie%20na%20czakan%20op.33%2C%20czyste%2C%20ca%C5%82o%C5%9B%C4%87.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">E.2.</span>{' '}
          <span className="composition-title">
            <em>
              Fantaisie brillante pour czakan avec fl&uuml;te douce et piano,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 33,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 9</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/E.2.%20Fantaisie%20brillante%20pour%20Czakan%20ou%20Flute%20douce%20et%20Piano%20Forte%20op.33%2C%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">E.3.</span>{' '}
          <span className="composition-title">
            <em>
              Introduction et variations pour czakan ou fl&uuml;te et piano
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 34,</em>
          </span>{' '}
          <span className="composition-description">
            <em>comp. 1833,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/E.3.a%2Cb.%20Introduction%20op%2034%20F366-368%20obr.560-571%2C%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">E.4.</span>{' '}
          <span className="composition-title">
            <em>
              Duo pour fl&uuml;te et piano sur un th&egrave;me de
              &bdquo;Rigoletto&rdquo; et le grand air
              d&rsquo;&bdquo;Ernani&rdquo;,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 92,</em>
          </span>{' '}
          <span className="composition-author">par Verdi,</span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>
      <a className="section-ref" id="section-F" />

      <Typography variant="h3" gutterBottom>
        F. {t`Music for clarinet and piano`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">F.1.</span>{' '}
          <span className="composition-title">
            <em>Duo pour piano et clarinette in B,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 18,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">F.2.</span>{' '}
          <span className="composition-title">
            <em>Sonate pour le Piano et Clarinette en Si -bemol,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 22,</em>
          </span>{' '}
          <span className="composition-author">par Luis Beethoven,</span>{' '}
          <span className="composition-description">
            <em>transcript par J. Ruckgaber</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 97,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/F.2.%20Sonate%20pour%20piano%20et%20clarinette%2C%20op.97.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-notes-line">
          <span className="composition-notes">
            ({t`missing pages ${'22-23'} of the manuscript`})
          </span>
        </div>
      </div>

      <a className="section-ref" id="section-G" />
      <Typography variant="h3" gutterBottom>
        G. {t`Music for the Choir`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">G.1.</span>{' '}
          <span className="composition-title">
            <em>Hoch- und Lustgesang-Cantate Es-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 57,</em>
          </span>{' '}
          <span className="composition-description">
            <em>(Dr. Rappaport)</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/G.1.%20Cantate%20op.%2057%28366-368%29%20obraz%20543-554.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">G.2.</span>{' '}
          <span className="composition-title">
            <em>Mit Gott furs Vaterland,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 63,</em>
          </span>{' '}
          <span className="composition-description">
            <em>gedicht v. F.t.Schwarz</em>
          </span>{' '}
          <span className="composition-author">Musik v. Jan Ruckgaber,</span>{' '}
          <span className="composition-description">
            <em>1859</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/G.2%20oryg.%2C%20Mit%20Gott%20furs%20Vaterland%2C%20Op.63%20%28280-329%29%20obr.%20394-418.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">G.3.</span>{' '}
          <span className="composition-title">
            <em>Trauerlied,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 67,</em>
          </span>{' '}
          <span className="composition-description">
            <em>&ndash; Gesangbuch f&uuml;r Chor,</em>
          </span>{' '}
          <span className="composition-author">
            Componiert von Johann Ruckgaber,
          </span>{' '}
          <span className="composition-description">
            <em>1859</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/G.3.%20Trauerlied%20Op.67%20IM%20F366-368%20obr.%20283-285%2Cczysta.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">G.4.</span>{' '}
          <span className="composition-title">
            <em>
              Volks &ndash; Hymne &bdquo;Gott erhalte, Gott
              besch&uuml;tze&ldquo; As-dur,
            </em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 70,</em>
          </span>{' '}
          <span className="composition-description">
            <em>f&uuml;r M&auml;nnerchor</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/G.4.%20Volks%20%E2%80%93%20Hymne%20op.70%20%28330-359%29%20obraz%20323-324.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <a className="section-ref" id="section-H" />
      <Typography variant="h3" gutterBottom>
        H. {t`Music for voice and piano`}
      </Typography>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 1.</span>{' '}
          <span className="composition-title">
            <em>Chanson chant&eacute;e,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 1,</em>
          </span>{' '}
          <span className="composition-description">
            <em>par Madame Becker</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.1.%20Chanson%20chantie%20op.%201%20%28280-329%29%20obr.297%2C%20czysta.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 2.</span>{' '}
          <span className="composition-title">
            <em>Favorit-L&auml;ndler,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 1,</em>
          </span>{' '}
          <span className="composition-description">
            <em>{t`voice and piano`}, von Johann Ruckgaber, 1822</em>
          </span>{' '}
          <sup className="composition-sources">6, 7</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.2.%20Landler.%20Op%201%20BN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 3.</span>{' '}
          <span className="composition-title">
            <em>3 Lieder</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 2, 3, 4</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.3.%203%20Lieder%20IM%20F280-329%20obr.232-241%2Cczysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          <em>1) Abgelebte Tage</em>
          <br />
          <em>2) Herzenblick</em>
          <br />
          <em>3) Der Trompeter,</em> {t`ms`}.
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 4.</span>{' '}
          <span className="composition-title">
            <em>2 Lieder</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.4.a.%202%20Lieder%20fur%20Alt%20mit%20Piano%2C%20op.5%2C6%20(366-368)%20obr.%20580-582%2C%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.4.b.%20Mein%20Herz%20fur%20mezzo%20sopran%20280-329%20obr.327-328%2C%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          <em>1) Mein Herz, op. 5, fur Alt mit Piano</em>
          <br />
          <em>
            2) R. 1812, op. 6, v. Ludwig Relstab aus dem historischen Romance –
          </em>
          <em>{t`voice and piano`}</em>
          <em>– {t`ms`}.</em>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 5.</span>{' '}
          <span className="composition-title">
            <em>3 Gedichte von Theodor Bakody, H-dur, As-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 9,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.5.%203%20Gedichte%20von%20Theodor%20Bakody,%20op.9%20(330-359)%20obr.%20271-278,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 6.</span>{' '}
          <span className="composition-title">
            <em>Der Schifferknabe,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 10</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.6.%20Der%20Schifferknabe,%20Op.10%20(330-359)%20obr.%20271-278,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 7.</span>{' '}
          <span className="composition-title">
            <em>Der Augenblick,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 11</em>
          </span>{' '}
          <span className="composition-description">
            <em>dicht. von Alois Sebera, C-dur, Gesang u. Piano</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 8.</span>{' '}
          <span className="composition-title">
            <em>3 Krakowiakes pour 2 voix avec l’accompagnement du piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 12,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Resignation Lied,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.8.%203%20Krakowiakes%20op.12,%20Resignation%20Lied%20(330-359)%20obr.014-020,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>
      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 9.</span>{' '}
          <span className="composition-title">
            <em>Liebes Zweifel,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 13</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.9.a%20Liebes%20Zweifel%20op.13%20(366-368)%20obr.577-579,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 10.</span>{' '}
          <span className="composition-title">
            <em>Mazure tirée de la chanson,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>„La Bajadère“,</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 11.</span>{' '}
          <span className="composition-title">
            <em>1) La M&eacute;lancholica, 3ème nocturno, B-moll,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 19,</em>
          </span>{' '}
          <span className="composition-description">
            <em>piano avec des paroles</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.11.1.%20La%20Melancholica%20op.19%20(280-329)%20obraz329-333.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          <em>
            2) Möge mich ein zweites mal nie bereiten ein solches Schicksal,
          </em>
          <br />
          <em>1861,</em> {t`ms`}.
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 12.</span>{' '}
          <span className="composition-title">
            <em>Du bist ein Engel,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 21,</em>
          </span>{' '}
          <span className="composition-description">
            <em>ged.v Alois Sebera, Gesang u. Piano</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 13.</span>{' '}
          <span className="composition-title">
            <em>Romance pour le chant et piano, As-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 22, 23,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.13.a.%20Romance,%20Chant%20–%20Piano,%20op.22%20(366-368)%20obr.105-107,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.13.b.%20Romance%20pour%20le%20chant%20et%20piano%20Op.23%20(366-368)%20obr.090-092,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          <em>
            Romance, Chant et Piano, op.22 a M. le chevalier Anibal Ghergheril
          </em>
          <br />
          <em>
            Romance, Chant et Piano, op 23 a M. le chevalier Anibal Ghergheril
          </em>
        </div>
      </div>
      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 14.</span>{' '}
          <span className="composition-title">
            <em>Das Fischleinlied, G-dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 24,</em>
          </span>{' '}
          <span className="composition-description">
            <em>sopran oder tenor, 1861</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.14.a.%20Das%20Fischleinlied%20op.24%20(280-329)%20obr.%20001-003,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 15.</span>{' '}
          <span className="composition-title">
            <em>Es schicht sich nicht,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 26,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Gedicht von F. Elholtz, {t`voice and piano`}</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.15.%20Es%20schicht%20sich%20nicht%20op.26%20(330-359)%20obr.%20052b-053,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 16.</span>{' '}
          <span className="composition-title">
            <em>Wanda,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 1,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Gedicht von Elholtz, {t`voice and piano`}</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.16.%20Wanda%20op.1%20(366-368)%20obr.%20325-328,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 17.</span>{' '}
          <span className="composition-title">
            <em>Do mogi&#322;,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 55,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              {t`lyrics by ${'Wincenty Pol'} with ${'German translation by'} Alojzy Sebera`}{' '}
              {t`voice and piano`}
            </em>
          </span>{' '}
          <sup className="composition-sources">2, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.17.%20Do%20Mogi%C5%82,%20op.55.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <sup className="composition-sources">7</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 18.</span>{' '}
          <span className="composition-title">
            <em>Différentes compositions pour le chant,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 61, 62, 63, 64, 65, à 66, 67, 68, 69,</em>
          </span>{' '}
          <span className="composition-description">
            <em>composées dans l'année 1857, 1958 et 1859</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
        <div className="composition-details">
          <em>1) 2 Volkshymne, {t`for ${4} male voices and a piano`}.</em>
          <br />
          <em>
            2) Der Frühling, romance, {t`voice and piano`},{' '}
            {t`manuscript from the year ${'1857'}`}.
          </em>
          <br />
          <em>3) Altes und Neues aus den Versen des wandelten, 1858</em>
          <br />
          <em>4) Gedicht von Moritz Saphier – {t`for voice`}</em>
        </div>
      </div>
      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 19a.</span>{' '}
          <span className="composition-title">
            <em>Das Vater Unser samt Ave Maria, No 1,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 65,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.19.a.%20Das%20Pater%20unser%E2%80%93samt%E2%80%93Ave%20Maria%20op.65%20(366-368)%20obr.%20305-307czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 19b.</span>{' '}
          <span className="composition-title">
            <em>Das Vater Unser nebst Ave Maria, No 2,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 65,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.19.b.%20(366-368)%20obr.308-310.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 20.</span>{' '}
          <span className="composition-title">
            <em>Altes und Neues – Gesang u. Piano,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 66,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 21.</span>{' '}
          <span className="composition-title">
            <em>Kennst das Meer,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 68,</em>
          </span>{' '}
          <span className="composition-description">
            <em>für Bariton mit Forte Piano Begleitung, Johan Ruckgaber</em>
          </span>{' '}
          <sup className="composition-sources">3, 5</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.21.a.%20Kennst%20das%20Meer%20Op.68,%20Sopran%20(366-368)%20obr.329-332,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.21.b.%20Kennst%20das%20Meer%20Op.68,%20Bariton,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 22.</span>{' '}
          <span className="composition-title">
            <em>Gendarmenlied, D-Dur,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 69,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Bass mit Piano</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.22.a.%20Gendarmenlied%20op.69%20(280-329)%20obr.051-053.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 23.</span>{' '}
          <span className="composition-title">
            <em>3 Mélodies hongroises,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 69,</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3, 4</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.23.a%2Cb.%20oryg.%203%20Melodies%20hongroises,%20Op.69%20(280-329)%20obr.%20367-381.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.23.%20Teksty%20(280-329)%20obraz%20%20373-%20375.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>{' '}
          <span className="composition-notes">({t`texts`})</span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 24.</span>{' '}
          <span className="composition-title">
            <em>Verlassene Lied und Piano No 30,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 70,</em>
          </span>{' '}
          <span className="composition-description">
            <em>M. Lanne Cassina gewidmet</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.24.%20Verlassene%20Lied%20und%20Piano%20No%2030,%20op.%2070%20(366-368)%20obraz%20312.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 25.</span>{' '}
          <span className="composition-title">
            <em>3 pieśni:</em>
          </span>{' '}
          <sup className="composition-sources">2, 3, 5</sup>
          <div className="composition-details">
            <em>1) Hans und Grete, op. 91,</em>
            <br />
            <em>2) Der Himmelschlüssel, op. 91</em>
          </div>
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.25.a.%20Hans%20und%20Grete,%20%20Op.%2091%20(366-368)%20obr.%20538-542,%20rkp,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.25.b.%20Die%20Himmelsschlussel%20Op.%2091,%20druk,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 26.</span>{' '}
          <span className="composition-title">
            <em>Aus Immer Munchkausen,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 92,</em>
          </span>{' '}
          <span className="composition-description">
            <em>{t`voice and piano`}</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 27.</span>{' '}
          <span className="composition-title">
            <em>3 Lieder,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 94,</em>
          </span>{' '}
          <span className="composition-description">
            <em>{t`voice and piano`}</em>
          </span>{' '}
          <sup className="composition-sources">1, 2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.27.%203%20Lieder%20op.%2094%20und%20Der%20Fr%C3%BChling%20(366-368)%20obr.098-104,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
        <div className="composition-details">
          <em>1) Rezygnacja</em>
          <br />
          <em>2) Hans und Grete</em>
          <br />
          <em>3) Mein Herz, {t`ms`}</em>
          <br />
          <em>und 4) Der Frühling</em>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 28.</span>{' '}
          <span className="composition-title">
            <em>Das erste Weib aus Engels Philosophie für die Welt,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 97,</em>
          </span>{' '}
          <span className="composition-description">
            <em>Gesang–Piano</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>{' '}
          <div className="composition-details">
            <em>2) Sächsisches Kriegs,</em> <em>lied, 1866,</em>{' '}
            <em>{t`ms`}.</em>{' '}
          </div>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 29.</span>{' '}
          <span className="composition-title">
            <em>Wir wollen Deutsche sein,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 20,</em>
          </span>{' '}
          <span className="composition-description">
            <em>für Chor 2 Tenor nur 2 Basse</em>
          </span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.29.%20Wir%20wollen%20Deutsche%20sein,%20op.%2020,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H, 30.</span>{' '}
          <span className="composition-title">
            <em>Die Träne,</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op. 99,</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.30.%20(366-368)%20obraz%20339-340,%20oryg.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 31.</span>{' '}
          <span className="composition-title">
            <em>2 Chansons russes</em>
          </span>{' '}
          <sup className="composition-sources">2</sup>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 32.</span>{' '}
          <span className="composition-title">
            <em>Tenor solo zur Cantate,</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}.</span>{' '}
          <sup className="composition-sources">2, 3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.32.%20Tenor%20solo%20zur%20Cantate%20(366-368)%20obr.280-282,%20czysty.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>

      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 33.</span>{' '}
          <span className="composition-title">
            <em>Sonate pour le piano</em>
          </span>{' '}
          <span className="composition-description">
            <em>par Jean Ruckgaber transcript du 2 de Bas tenor</em>
          </span>{' '}
          <sup className="composition-sources">3</sup>{' '}
          <span className="composition-pdf">
            <a
              href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/compositions/H.33.%20Sonate%20pour%20le%20Piano%20(330-359)%20obr.225-241,%20czysta.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PictureAsPdfIcon fontSize="small" style={{ color: red[500] }} />
            </a>
          </span>
        </div>
      </div>
      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">H. 34.</span>{' '}
          <span className="composition-title">
            <em>Dumka „Bili zime&#808; ca&#322;a&#808;“</em>
          </span>{' '}
          <span className="composition-description">
            <em>{t`voice and piano`}</em>
          </span>{' '}
          <span className="composition-manuscript">{t`ms`}</span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>
      <a className="section-ref" id="section-I" />
      <Typography variant="h3" gutterBottom>
        I. {t`Music for guitar and piano`}
      </Typography>
      <div className="composition-entry">
        <div className="composition-main">
          <span className="composition-id">I.1.</span>{' '}
          <span className="composition-title">
            <em>Duo A-dur pour violon et guitarre</em>
          </span>{' '}
          <span className="composition-description">
            <em>par Joseph Mayseder</em>
          </span>{' '}
          <span className="composition-opus">
            <em>op.12,</em>
          </span>{' '}
          <span className="composition-description">
            <em>
              arrangee pour piano et guitarre, a son ami Charles Zehn. Dopisek:
              “executee dans les socrees musicales de M.Kwiatkowski”
            </em>
          </span>{' '}
          <span className="composition-notes">
            <em>&ndash; &ndash; {t`ms`}</em>
          </span>{' '}
          <sup className="composition-sources">1, 2</sup>
        </div>
      </div>
    </StyledDiv>
  )
}

export default CompositionsMarkup
