/* Any css file which is to be used globally can be importedsere */
import React from "react"
import { Redirect } from "@reach/router"

//importing bootstrap and frugal css

// import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/frugal.css'
import '../components/frugal2.css'
// import '../components/output.scss'
//importing bootstrap and frugal css


const IndexPage = () => <Redirect noThrow from="" to="/blog" />

export default IndexPage
