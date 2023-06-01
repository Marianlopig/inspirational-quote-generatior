import React, {useState} from "react"

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle, RedSpan } from '@/components/QuoteGenerator/QuoteGeneratorElements'

//Assets
import Clouds1 from "../assets/cloud-and-thunder.png"
import Clouds2 from "../assets/cloudy-weather.png"


export default function Home() {

const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0)

const handleGenerateQuote = () => {

}
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/* Background */}
     <GradientBackgroundCon>

      {/* Quote Gneerator Modal Pop-Up */}
      {/* <QuoteGeneratorModal /> */}

      {/* Quote Gnerator */}
      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>
            Daily Inspiration Generator
          </QuoteGeneratorTitle>

          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration= Generate a quote card with a random inspirational quote provided by <FooterLink href="https://travelanding.com" target="_blank" rel="noopener noreferrer"> Marian </FooterLink>
          </QuoteGeneratorSubTitle>
          <GenerateQuoteButton>
            <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      {/* Background Images*/}
      <BackgroundImage1
      src={Clouds1}
      height="300"
      alt="cloudybackground1"
      />

    <BackgroundImage2
      src={Clouds2}
      height="300"
      alt="cloudybackground1"
      />

      <FooterCon>
        <>
        Quotes Generated: {numberOfQuotes}
        <br />
        Developed with <RedSpan>❤️</RedSpan> by <FooterLink href="https://travelanding.com" target="_blank" rel="noopener noreferrer"> Marian </FooterLink>
        </>
      </FooterCon>

     </GradientBackgroundCon>
    </>
  )
}
