import React,{Component} from 'react';
import { Text,Platform,UIManager,LayoutAnimation,View,TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';
class ListItem extends Component{
    constructor(){
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    }
componentWillUpdate(){
    LayoutAnimation.spring();
}

renderDescription(){
    if(this.props.library.item.id === this.props.selectedLibraryId){
        return(
            <CardSection>
            <Text style ={{flex:1}}>{this.props.library.item.description}</Text>
            </CardSection>
        )
    }
}
    render(){
        const {titleStyle} = styles;
        console.log(this.props.library.item.title);
        const {id, title} =this.props.library.item;
        
        return(
            <TouchableWithoutFeedback
             onPress={()=>this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                         <Text style = {titleStyle}>
                           {this.props.library.item.title}
                         </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
        </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleStyle :{
        fontSize:18,
        paddingLeft:15,
        color:'blue'
    }
}
const mapStateToProps = (state) => {
    return {selectedLibraryId:state.selectedLibraryId};
}
export default connect(mapStateToProps, actions)(ListItem);