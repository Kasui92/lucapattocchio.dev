import { ReactElement } from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

/**
 * App
 * @constructor
 */
const App = (): ReactElement => {
    return (
        <>
            <div className="relative flex w-full flex-col px-4 pt-12 xl:px-0">
                <Header />
                <main className="flex-auto">
                    <div className="mx-auto max-w-2xl">
                        <div className="h-full w-full border border-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a lectus in nisi pulvinar
                            aliquet nec sit amet eros. Proin interdum enim urna. Quisque ornare dolor eu vulputate maximus.
                            Nulla venenatis euismod velit vel facilisis. Sed eget justo eu augue eleifend efficitur. Sed sit
                            amet ante nibh. Aenean tempus orci a feugiat ornare. Suspendisse imperdiet accumsan diam, ut
                            vehicula enim venenatis id. Etiam quis odio fringilla, rhoncus turpis quis, auctor lacus. Mauris
                            ac justo a mauris sagittis laoreet. Nam at ullamcorper eros. Proin elementum pulvinar dui nec
                            finibus. Mauris ac ultricies lorem. Maecenas sit amet vestibulum elit. Maecenas fringilla odio a
                            sollicitudin dictum. Nulla sit amet lacus sed augue consequat aliquam. Suspendisse pellentesque
                            tellus lorem, et interdum nisi lacinia fringilla. Curabitur lobortis ex rhoncus posuere dapibus.
                            Phasellus consectetur mollis dui, vel mattis tellus volutpat nec. Duis porttitor venenatis mi ut
                            placerat. Cras finibus ultrices auctor. Vestibulum tempor sapien non maximus cursus. Donec nec
                            interdum elit, non consectetur mauris. Nullam ornare blandit mi. Pellentesque interdum at ligula
                            pretium cursus. Curabitur et urna quis orci tempus condimentum quis eu dolor. Sed a placerat
                            massa, id commodo est. Proin molestie purus a quam commodo, vel blandit est dictum. Donec ornare
                            efficitur purus ut auctor. Etiam porta egestas nisi, vel ornare purus faucibus vel. Maecenas
                            luctus ligula luctus sapien tincidunt auctor. Quisque efficitur odio non efficitur facilisis.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut
                            nisl nulla. Sed ac sem metus. Nam dignissim laoreet libero at ultricies. Nullam pretium rutrum
                            sem vel aliquam. Integer et eros porta, sollicitudin dolor ac, efficitur turpis. Praesent
                            condimentum rutrum enim at aliquam. Maecenas eros nunc, mollis at blandit commodo, convallis non
                            ipsum. Donec fringilla, turpis sit amet tempus ullamcorper, arcu elit ullamcorper est, nec ornare
                            ante justo sit amet turpis. In nec commodo leo. Maecenas sem libero, pharetra scelerisque metus
                            vulputate, varius ornare augue. Maecenas pellentesque fringilla volutpat. In non placerat orci,
                            at sollicitudin lacus. Suspendisse nec nisl eu lorem rhoncus bibendum interdum in mauris. Donec
                            nunc sem, faucibus eu tincidunt at, consequat a turpis. In ac porttitor lectus, eget posuere
                            erat. Donec in mi feugiat, tempus orci quis, feugiat tellus. Ut consequat congue dignissim.
                            Curabitur malesuada tellus ex, quis eleifend risus accumsan sed. Fusce sit amet urna ligula.
                            Nullam at risus hendrerit, dapibus ante vel, aliquet leo.
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
