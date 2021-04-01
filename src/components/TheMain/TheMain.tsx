import  { useEffect, useState } from "react"
import { connect } from "react-redux"
import { AppDispatch, RootState } from "../../App"
import { FETCH_OCCASIONS } from "../../store/actions/occasionsActions"
import { MainContainer } from "./TheMainStyled"
import { MainProps } from "./typings"

const TheMain = (props: MainProps) =>  {
    const { fetchOccasions, occasions } = props;

    useEffect(() => {
        fetchOccasions()
    }, [])
    return (
        <MainContainer>
            <div>occasions</div>
            <div>{occasions && occasions.map(
                item => <div key={item.id}>{item.occasion}</div>
            )}</div>
        </MainContainer>
    )
}

function mapDispatchToProps(dispatch: AppDispatch) {
    return({
        fetchOccasions: () => {dispatch({
            type: FETCH_OCCASIONS
        })}
    })
}

const mapStateToProps = (state: RootState) => ({
    occasions: state.occasions
})

export default connect(mapStateToProps, mapDispatchToProps)(TheMain)